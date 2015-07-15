 var app = angular.module('myapp', [])
.directive("textquestion", function(){
    return {
        restrict: 'A',
        template : '<label>{{question.displayText}}<br/><input name="{{question.qstnNo}}" type="text"/></label>',
        scope : { question: '=textquestion' }
    };
})
.directive("radioquestion", function(){
    return {
        restrict: 'A',
        template : '{{question.displayText}}<br/><label ng-repeat="resp in question.demographicResponses"><input  name="{{question.qstnNo}}" type="radio" value="{{resp.respNo}}" /> {{resp.possibleResponse}} </label> ',
        scope : { question: '=radioquestion' }
    };
})
.directive("multiquestion", function(){
    return {
        restrict: 'A',
        template : '{{question.displayText}}<br/><label ng-repeat="resp in question.demographicResponses"><input  name="{{question.qstnNo}}" type="checkbox" value="{{resp.respNo}}" /> {{resp.possibleResponse}} </label>',
        scope : { question: '=multiquestion' }
    };
})
.directive("selectquestion", function(){
    return {
        restrict: 'A',
        template : '{{question.displayText}}<br/><label> <select name="{{question.qstnNo}}"><option ng-repeat="resp in question.demographicResponses" value="{{resp.respNo}}"> {{resp.possibleResponse}}</option></select></label>',
        scope : { question: '=selectquestion' }
    };
})
.controller('ctrl', function($scope){
    $scope.questions = [
     {
          "seqNo":0,
          "qstnNo":34,
          "responseType":"F",
          "responseRequired":false,
          "displayText":"If you have been provided with a state ID enter it here",
          "demographicResponses":[],
          "dependentQuestionVO":[],
          "selectedResponseIds":[],
          "freeFormAnswer":null,
          "response":"",
          "independent":true,
          "answered":false,
          "triggered":false
       },
       {
          "seqNo":2,
          "qstnNo":2,
          "responseType":"R",
          "responseRequired":true,
          "displayText":"What is your ethnicity?",
          "demographicResponses":[
             {
                "possibleResponse":"Non-Hispanic",
                "seqNo":2,
                "respNo":201
             },
             {
                "possibleResponse":"Hispanic",
                "seqNo":2,
                "respNo":202
             },
             {
                "possibleResponse":"I prefer not to respond",
                "seqNo":2,
                "respNo":203
             }
    ],

 "dependentQuestionVO":[
         {
            "dependentQstnNo":3,
            "triggerRespNo":202,
            "triggerArrayElement":"[202,3]"
         }
      ],
      "selectedResponseIds":[
         "201",
         "202",
         "203"
      ],
      "freeFormAnswer":null,
      "response":"Non-Hispanic\nHispanic\nI prefer not to respond\n",
      "independent":false,
      "answered":true,
      "triggered":true
   },
   {
      "seqNo":3,
      "qstnNo":3,
      "responseType":"R",
      "responseRequired":true,
      "displayText":"What is your Hispanic origin?",
      "demographicResponses":[
         {
            "possibleResponse":"Mexican, Mexican, or Chicano",
            "seqNo":3,
            "respNo":301
         },
         {
            "possibleResponse":"Puerto Rican or Puerto Rican American",
            "seqNo":3,
            "respNo":302
         },
         {
            "possibleResponse":"Cuban or Cuban American",
            "seqNo":3,
            "respNo":303
         },
         {
            "possibleResponse":"Other",
            "seqNo":3,
            "respNo":304
         }
      ],
      "dependentQuestionVO":[

      ],
      "selectedResponseIds":[
         "301",
         "302",
         "303",
         "304"
      ],
      "freeFormAnswer":null,
      "response":"Mexican, Mexican, or Chicano\nPuerto Rican or Puerto Rican American\nCuban or Cuban American\nOther\n",
      "independent":true,
      "answered":true,
      "triggered":false
   },
   {
      "seqNo":4,
      "qstnNo":4,
      "responseType":"M",
      "responseRequired":true,
      "displayText":"What is your race? Select all that apply.",
      "demographicResponses":[
         {
            "possibleResponse":"American Indian or Alaskan Native",
            "seqNo":4,
            "respNo":401
         },
         {
            "possibleResponse":"Asian",
            "seqNo":4,
            "respNo":402
         },
         {
            "possibleResponse":"Black or African American",
            "seqNo":4,
            "respNo":403
         },
         {
            "possibleResponse":"Native Hawaiian or Other Pacific Islander",
            "seqNo":4,
            "respNo":404
         },
         {
            "possibleResponse":"White",
            "seqNo":4,
            "respNo":405
         },
         {
            "possibleResponse":"Other",
            "seqNo":4,
            "respNo":406
         },
         {
            "possibleResponse":"I prefer not to respond",
            "seqNo":4,
            "respNo":407
         }
      ],
      "dependentQuestionVO":[

      ],
      "selectedResponseIds":[
         "401",
         "402",
         "403",
         "404",
         "405",
         "406",
         "407"
      ],
      "freeFormAnswer":null,
      "response":"American Indian or Alaskan Native\nAsian\nBlack or African American\nNative Hawaiian or Other Pacific Islander\nWhite\nOther\nI prefer not to respond\n",
      "independent":true,
      "answered":true,
      "triggered":false
   },
   {
      "seqNo":5,
      "qstnNo":5,
      "responseType":"R",
      "responseRequired":true,
      "displayText":"Do you communicate better (or as well) in English than in any other language?",
      "demographicResponses":[
         {
            "possibleResponse":"Yes",
            "seqNo":5,
            "respNo":501
         },
         {
            "possibleResponse":"No",
            "seqNo":5,
            "respNo":502
         }
      ],
      "dependentQuestionVO":[

      ],
      "selectedResponseIds":[
         "501",
         "502"
      ],
      "freeFormAnswer":null,
      "response":"Yes\nNo\n",
      "independent":true,
      "answered":true,
      "triggered":false
   },
   {
      "seqNo":6,
      "qstnNo":6,
      "responseType":"R",
      "responseRequired":false,
      "displayText":"Which of the following best describes your current employment status?",
      "demographicResponses":[
         {
            "possibleResponse":"Employed part-time (29 or fewer hours per week)",
            "seqNo":6,
            "respNo":601
         },
         {
            "possibleResponse":"Employed full-time",
            "seqNo":6,
            "respNo":602
         },
         {
            "possibleResponse":"Unemployed (seeking employment)",
            "seqNo":6,
            "respNo":603
         },
         {
            "possibleResponse":"Not in the labor force (homemaker, family caregiver, student, retired )",
            "seqNo":6,
            "respNo":604
         }
      ],
      "dependentQuestionVO":[

      ],
      "selectedResponseIds":[
         "601",
         "602",
         "603",
         "604"
      ],
      "freeFormAnswer":null,
      "response":"Employed part-time (29 or fewer hours per week)\nEmployed full-time\nUnemployed (seeking employment)\nNot in the labor force (homemaker, family caregiver, student, retired )\n",
      "independent":true,
      "answered":true,
      "triggered":false
   },
   {
      "seqNo":7,
      "qstnNo":7,
      "responseType":"S",
      "responseRequired":false,
      "displayText":"What was the last grade of school that you completed?",
      "demographicResponses":[
         {
            "possibleResponse":"5th grade or lower",
            "seqNo":7,
            "respNo":701
         },
         {
            "possibleResponse":"6th grade",
            "seqNo":7,
            "respNo":702
         },
         {
            "possibleResponse":"7th grade",
            "seqNo":7,
            "respNo":703
         },
         {
            "possibleResponse":"8th grade",
            "seqNo":7,
            "respNo":704
         },
         {
            "possibleResponse":"9th grade (high school freshman)",
            "seqNo":7,
            "respNo":705
         },
         {
            "possibleResponse":"10th grade (high school sophomore)",
            "seqNo":7,
            "respNo":706
         },
         {
            "possibleResponse":"11th grade (high school junior)",
            "seqNo":7,
            "respNo":707
         },
         {
            "possibleResponse":"12th grade (high school senior)",
            "seqNo":7,
            "respNo":708
         }
      ]
}
];});
