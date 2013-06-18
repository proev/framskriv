// parsing csv
function CSVToArray(strData,strDelimiter){strDelimiter=strDelimiter||",";var objPattern=new RegExp("(\\"+strDelimiter+"|\\r?\\n|\\r|^)"+'(?:"([^"]*(?:""[^"]*)*)"|'+'([^"\\'+strDelimiter+"\\r\\n]*))","gi");var arrData=[[]];var arrMatches=null;while(arrMatches=objPattern.exec(strData)){var strMatchedDelimiter=arrMatches[1];if(strMatchedDelimiter.length&&strMatchedDelimiter!=strDelimiter)arrData.push([]);if(arrMatches[2])var strMatchedValue=arrMatches[2].replace(new RegExp('""',"g"),'"');else var strMatchedValue=
arrMatches[3];arrData[arrData.length-1].push(strMatchedValue)}return arrData};

  // chart = new Highcharts.Chart({
  //   chart: {

  //   },
  //   colors: ['#F06511', '#7B3014', '#F0C294']
  //   });

$(function () {
  $('#fig1').highcharts({
    title: {
      text: 'Befolkningsutvikling 1972-2012'
    },
    subtitle: {
      text: ''
    },
    colors: ['#F06511', '#7B3014', '#F0C294'],
    xAxis: [{
      tickInterval: 5,
      title: {
        text:null
      },
      categories: [1972, 1973, 1974,  1975,  1976,  1977,  1978,  1979,  1980,  1981,  1982,  1983,  1984,  1985,  1986,  1987,  1988,  1989,  1990,  1991,  1992,  1993,  1994,  1995,  1996,  1997,  1998,  1999,  2000,  2001,  2002,  2003,  2004,  2005,  2006,  2007,  2008,  2009,  2010,  2011,  2012]
    },{
      title: {
        text: null
      }
    }
    ],
    yAxis: [{
      min:0,
      max:200000
    }],
    legend: {
      enabled : false
    },
    plotOptions: {
      line: {
        marker: { enabled: false }
      }
    },
    series: [{
     name: 'Verdi',
     data: [129133, 131532,  133213,  134039,  134889,  135558,  135085,  134683,  134726,  134976,  134690,  134665,  134143,  134075,  134362,  134537,  135524,  136601,  137346,  138058,  139630,  140656,  142188,  142927,  143829,  144670,  145778,  147187,  148859,  150166,  151408,  152699,  154351,  156161,  158613,  161730,  165191,  168257,  170936,  173486,  176348]
   }]
 });

  $('#fig2').highcharts({
    title: {
      text: 'Befolkningsutvikling 1972-2012'
    },
    subtitle: {
      text: ''
    },
    colors: ['#F06511', '#7B3014', '#F0C294'],
    xAxis: [{
      tickInterval: 5,
      startOnTick: false,
      title: {
        text:null
      },
      categories: [2013, 2014,  2015,  2016,  2017,  2018,  2019,  2020,  2021,  2022,  2023,  2024,  2025,  2026,  2027,  2028,  2029,  2030,  2031,  2032,  2033,  2034,  2035,  2036,  2037,  2038,  2039,  2040]
    },{
      title: {
        text: null
      }
    }
    ],
    yAxis: [{
      min:0,
      max:300000
    }],
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 50,
      layout: 'vertical'
    },
    plotOptions: {
      line: {
        marker: { enabled: false }
      }
    },
    series: [{
     name: 'Mellomalternativ',
     data: [179250,  182297,  185421,  188561,  191706,  194749,  197740,  200656,  203468,  206208,  208827,  211329,  213702,  215951,  218058,  220053,  221948,  223717,  225410,  226998,  228492,  229917,  231280,  232598,  233901,  235160,  236389,  237622]
   },
    {
        name: 'Lavalternativ',
        data: [178420, 180973,  183536,  186045,  188479,  190743,  192875,  194858,  196721,  198479,  200141,  201671,  203093,  204391,  205598,  206704,  207708,  208608,  209434,  210139,  210756,  211279,  211720,  212081,  212354,  212555,  212693,  212764]
    },
    {
        name: 'Høyalternativ',
        data: [180070, 183629,  187341,  191154,  194946,  198707,  202436,  206123,  209814,  213505,  217128,  220740,  224285,  227801,  231256,  234686,  238072,  241413,  244718,  247987,  251225,  254426,  257626,  260797,  263951,  267108,  270268,  273434]
    }
   ]
 });

  $('#fig3').highcharts({
    chart: { type: 'column' },
    title: {
      text: 'Alderssamansetning og aldring - 2012, 2020 og 2040'
    },
    subtitle: {
      text: ''
    },
    colors: ['#B4D4DA', '#3A87B7', '#26456E'],
    xAxis: [{
      title: {
        text:null
      },
      opposite: false,
      gridLineWidth: 1,
      categories: [ '0-5 år', '6-19 år', '20-66 år', '67-79 år', '80 år eller eldre']
    },{
      title: {
        text: null
      }
    }
    ],
    yAxis: {
      min: 0,
      gridLineWidth:0,
      title: {
        text: 'Del av befolkninga'
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 50,
      layout: 'vertical'
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
     name: '2012',
     data: [7.8, 16.3, 64.8, 7.4, 3.7]

   }, {
     name: '2020',
     data: [8.4, 15.6, 63.4, 9.3, 3.3]
   }, {
     name: '2040',
     data: [7.3, 16.6, 59.7, 10.5, 5.9]
   }
   ]
 });

});
