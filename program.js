const programs = [ 
  "bachelor of business management",
  "bachelor of hotel and hospitality management",
"bachelor of Science in applied statistics with computing",
"bachelor of science in tourism management",
"bachelor of science in communication and public relations",
"bachelor of science in computer science",
"bachelor of education science",
"bachelor of science in counseling psychology",
"bachelor of science in nursing",
"bachelor of commerce",
"bachelor of science in medical laboratory science",
"bachelor of education arts",
 "arts in community development",
"bachelor of science in physiotherapy",
"bachelor of business information technology",
"bachelor of science in public health"
];

export { programs };
  
  const programsEducation = {
    "bachelor of education science": {
      "chem/phyc": {
        1: {
        1: [
              "CHEM 112: Fundamentals of Chemistry",
              "CHEM 111: Introduction to Analytical chemistry",
              "PHY 111: Mechanics",
              "PHY 112: Heat and Thermodynamics",
              "PSY 110: Quantitative and Qualitative Techniques in Education",
              "SNE 100: Special Needs and inclusive Education",
              "EMP 100: Teacher Education and the Teaching Profession",
              "CIM 110: Communication Skills in Education"
            ], 
       2: []
        },
      2: {
        1: [
          "CHE 212: Atomic Structure and Bonding",
          "CHE 211: Chemical Analysis and Structural Determination",
          "PHY 212: Oscillations and Waves",
          "PHY 210: Electricity and Magnetism I",
          "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
        "CIM 217: Integrated Science Subject Methods"
        ]
      },
      3: {
      1: [
        "CHE 311: Analytical Chemistry",
        "CHE 314: Organic Chemistry",
        "EDC 315: Chemistry Education II",
        "PHY 311: Quantum Mechanics",
        "PHY 314: Thermodynamics",
        "EDR 315 Physics Education II"
      ]
      },
      4: {
      1: [
        "CHE 411: Physical Chemistry",
        "CHE 412: Inorganic Chemistry",
        "PHY 411: Nuclear Physics",
        "PHY 412: Solid State Physics"
      ]
      }
      },
    "chem/bio": {
      1 : {
      1: [
        "Fundamentals of Chemistry (CHEM 112)",
        "Introduction to Analytical chemistry (CHEM 111)",
        "General Botany (BOT 112)",
        "Cell Biology (BIO 111)",
       "Quantitative and Qualitative Techniques in Education (PSY 110)",
        "Special Needs and inclusive Education (SNE 100)",
        "Teacher Education and the Teaching Profession (EMP 100)",
        "Communication Skills in Education (CIM 110)",
        "CIM 217: Integrated Science Subject Methods"
      ]
      },
    2: {
      1: [
          "CHE 212: Atomic Structure and Bonding",
          "CHE 211: Chemical Analysis and Structural",
          "BIO 211: Fundamentals of Ecology",
          "BOT 212: Plant Systematic and Taxonomy",
             "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
          "CIM 217: Integrated Science Subject Methods"
      ]
    },
   3: {
     1: [
      "CHE 311: Analytical Chemistry",
      "CHE 314: Organic Chemistry",
      "EDC 315: Chemistry Education II",
      "BIO 311: Environmental Biology",
      "BIO 314: Vertebrate Zoology",
      "EDB 315 Biology Education II"
     ]
   },
  4: {
  1: [
     "CHE 411: Physical Chemistry",
    "CHE 412: Inorganic Chemistry",
    "BIO 411: Molecular Genetics",
    "BIO 412 Immunology"
  ]
  }
    },
    "math/chem": {
      1 : {
      1: [
          "CHEM 112: Fundamentals of Chemistry",
        "CHEM 111: Introduction to Analytical chemistry",
        "MAT 112: Differential Calculus I",
        "MAT 111: Basic Mathematics and Analytical Geometry",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
      "MAT 211: Linear Algebra I",
      "MAT 212: Real Analysis I",
      "CHE 212: Atomic Structure and Bonding",
     "CHE 211: Chemical Analysis and Structural Determination",
        "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
        "CIM 217: Integrated Science Subject Methods"
    ]
    },
   3: {
    1: [
      "CHE 311: Analytical Chemistry",
      "CHE 314: Organic Chemistry",
      "EDC 315: Chemistry Education II",
      "MAT 311: Abstract Algebra",
      "MAT 314: Real Analysis",
      "EDE 315: Mathematics Education II"
    ]
   },
  4: {
  1: [
    "MAT 411: Complex Analysis",
    "MAT 412 Differential Geometry",
     "CHE 411: Physical Chemistry",
    "CHE 412: Inorganic Chemistry"
  ]
  }
    },
    "math/bio": {
      1 : {
      1: [
         "MAT 112: Differential Calculus I",
        "MAT 111: Basic Mathematics and Analytical Geometry",
        "BOT 112: General Botany",
        "BIO 111: Cell Biology",
         "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
      ]
      },
    2: {
    1: [
     "MAT 211: Linear Algebra I",
     "MAT 212: Real Analysis I",
      "BIO 211: Fundamentals of Ecology",
     "BOT 212: Plant Systematic and Taxonomy",
       "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
        "CIM 217: Integrated Science Subject Methods"
    ]
    },
  3: {
  1: [
      "MAT 311: Abstract Algebra",
      "MAT 314: Real Analysis",
      "EDE 315: Mathematics Education II",
       "BIO 311: Environmental Biology",
      "BIO 314: Vertebrate Zoology",
      "EDB 315 Biology Education II"
  ]
  },
  4: {
  1: [
    "MAT 411: Complex Analysis",
    "MAT 412: Differential Geometry",
    "BIO 411: Molecular Genetics",
    "BIO 412: Immunology"
  ]
  }
    },
    "bio/phyc": {
      1: {},
      2: {
        1: [
          "BIO 211: Fundamentals of Ecology",
          "BOT 212: Plant Systematic and Taxonomy",
          "PHY 211: Electricity and Magnetism 1",
          "PHY 212: Oscillations and Waves",
           "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
          "CIM 217: Integrated Science Subject Methods"
          
        ]
      }
    },
    "math/phyc": {
      1: {
      1: [
        "MAT 112: Differential Calculus I",
        "MAT 111: Basic Mathematics and Analytical Geometry",
        "PHY 111: Mechanics",
        "PHY 112: Heat and Thermodynamics",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
      ]
      },
    2: {
    1: [
     "MAT 211: Linear Algebra I",
     "MAT 212: Real Analysis I",
     "PHY 212: Oscillations and Waves",
    "PHY 210: Electricity and Magnetism I",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
          "CIM 217: Integrated Science Subject Methods"
    ]
    }, 
   3: {
    1: [
      "MAT 311: Abstract Algebra",
      "MAT 314: Real Analysis",
      "EDE 315: Mathematics Education II",
      "PHY 311: Quantum Mechanics",
      "PHY 314: Thermodynamics",
      "EDR 315: Physics Education II"
    ]
   },
   4: {
    1: [
     "MAT 411: Complex Analysis",
    "MAT 412: Differential Geometry",
    "PHY 411 Nuclear Physics",
    "PHY 412 Solid State Physics"
    ]
   }
    }, 
      "agric/bio": {
      1: {
      1: [
       "AGRIC 111: Introduction to Soil Science and Management",
        "AGRIC 112: Principles of Crop Production",
      "BOT 112: General Botany",
        "BIO 111: Cell Biology",
              "PSY 110: Quantitative and Qualitative Techniques in Education",
    "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
    
      ]
      },
    2: {
    1: [
    "AGR 212: Animal Feeds and Nutrition",
    "AGR 211: Annual Crops",
     "BOT 212: Plant Systematic and Taxonomy",
     "BIO 211: Fundamentals of Ecology",
       "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
        "CIM 217: Integrated Science Subject Methods"
    
    ]
    },
   3: {
    1: [
    "BIO 311: Environmental Biology",
      "BIO 314: Vertebrate Zoology",
      "EDB 315: Biology Education II",
      "AGR 311: Crop Production",
      "AGR 314: Soil Science",
      "EDR 316: Agriculture Education II"
    ]
   },
  4: {
  1: [
    "AGR 411: Agricultural Economics",
    "AGR 412: Livestock Production",
    "BIO 411: Molecular Genetics",
    "BIO 412: Immunology"
  ]
  }
    },
      "agric/chem": {
      1: {
      1: [
       "AGRIC 111: Introduction to Soil Science and Management",
        "AGRIC 112: Principles of Crop Production",
       "CHEM 112: Fundamentals of Chemistry",
        "CHEM 111: Introduction to Analytical chemistry",
              "PSY 110: Quantitative and Qualitative Techniques in Education",
    "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
    
      ]
      },
    2: {
    1: [
    "AGR 212: Animal Feeds and Nutrition",
    "AGR 211: Annual Crops",
    "CHE 212: Atomic Structure and Bonding",
    "CHE 211: Chemical Analysis and Structural Determination",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
        "CIM 217: Integrated Science Subject Methods"
    ]
    },
  3: {
  1: [
      "AGR 311: Crop Production",
      "AGR 314: Soil Science",
      "EDR 316: Agriculture Education II",
      "CHE 311: Analytical Chemistry",
      "CHE 314: Organic Chemistry",
      "EDC 315: Chemistry Education II"
  ]
  },
  4: {
  1: [
     "AGR 411: Agricultural Economics",
    "AGR 412: Livestock Production",
    "CHE 411: Physical Chemistry",
    "CHE 412: Inorganic Chemistry"
  ]
  }
    }
    },
  "bachelor of education arts": {
    "eng/lit": {
      1: {
      1: [
        "LIN 110: Introduction to the Study of Language",
        "ENG 111: The Art of Writing",
        "LIT 110: Introduction to Literature",
        "LIT 111: East African Fiction",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
      "ENG 211E: English Morphology",
      "LIT 210: Humanist Literary Theory",
      "LIT 211: African Drama",
       "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "ENG 310: English Syntax II",
    "EDE 314 Language Education II",
    "LIT 312: Caribbean Fiction",
    "LIT 310: Critical Theory",
    "LIT 321 Children Literature",
    "EDL 313 Literature Education II"
  ]
  },
  4: {
  1: [
    "ENG 411: Practical English Stylistics",
    "LIN 411E: Contrastive Linguistics & Error Analysis",
    "LIT 412: Africa American Fiction",
    "LIT 411: The African Novel"
  ]
  }
    },
    "kis/cre": {
      1: {
      1: [
        "KIS 112: Introduction to Literary Appreciation in Kiswahili",
        "KIS 111: Introduction to Kiswahili Language and Linguistics",
        "PRT 110: Introduction to Ethics",
        "REL 110: Traditional African Worldview",
          "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "REL 211: History of Christianity I",
    "REL 213: Studies in the New Testament I",
    "BAS 202: Introduction to Political philosophy",
    "KIS 211: Theories and Analysis of Kiswahili Literature",
    "KIS 212: Phonetics and Phonology in Kiswahili",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "SWA 313: Isimu Jamii",
    "SWA 315: Lugha ya Kiswahili",
    "EDC 310: Kiswahili Education II",
    "PRT 310: Philosophy of Religion",
    "REL 314: Studies in New Testament II",
    "EDR 318: Religious Education II"
  ]
  },
  4: {
    1: [
      "SWA 412: Fasihi ya Kiswahili",
      "SWA 414: Nadharia ya Tafsiri na Ukalimani",
      "BAS 401: Issues in Social Ethics",
      "THL 411: Studies in Old Testament II",
      "REL 415E: Psychology of Religion",
      "REL 414: Guidance and Counselling in Religion"
    ]
  }
    },
    "kis/his": {
      1: {
      1: [
         "KIS 112: Introduction to Literary Appreciation in Kiswahili",
        "KIS 111: Introduction to Kiswahili Language and Linguistics",
        "HIS 110: Introduction to African History up to 1884",
        "HIS 111: Introduction to world civilization up to 1500",
          "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "HIS 211: Themes in East Africa History",
    "HIS 210: History of Kenya up to 1895",
    "KIS 212: Phonetics and Phonology in Kiswahili",
    "KIS 211: Theories and Analysis of Kiswahili Literature",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "SWA 313: Isimu Jamii",
    "SWA 315: Lugha ya Kiswahili",
    "EDC 310: Kiswahili Education II",
    "HIS 311: African History Since 1900",
    "HIS 321: Modern Trends in African History",
    "HIS 314: Themes in World History"
  ]
  },
  4: {
  1: [
     "SWA 412: Fasihi ya Kiswahili",
    "SWA 414: Nadharia ya Tafsiri na Ukalimani",
    "HIS 414: History of Science and Technology",
    "HIS 416: History of Diplomacy",
    "EDR 410: History Education II"
  ]
  }
    },
    "kis/geo": {
      1: {
      1: [
        "KIS 112: Introduction to Literary Appreciation in Kiswahili",
        "KIS 111: Introduction to Kiswahili Language and Linguistics",
        "GEO 111: The Development of Geographic Thought",
        "GEO 110: The Earth’s Physical Environment",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "KIS 211: Theories and Analysis of Kiswahili Literature",
    "KIS 212: Phonetics and Phonology in Kiswahili",
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "SWA 313: Isimu Jamii",
    "SWA 315: Lugha ya Kiswahili",
    "EDC 310: Kiswahili Education II",
    "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II"
  ]
  },
  4: {
  1: [
    "SWA 412: Fasihi ya Kiswahili",
    "SWA 414: Nadharia ya Tafsiri na Ukalimani",
    "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management"
  ]
  }
    },
    "geo/cre": {
      1: {
      1: [
         "GEO 111: The Development of Geographic Thought",
        "GEO 110: The Earth’s Physical Environment",
        "PRT 110: Introduction to Ethics",
        "REL 110: Traditional African Worldview",
          "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
    "REL 213: Studies in the New Testament I",
    "BAS 202: Introduction to Political philosophy",
    "REL 211: History of Christianity I",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
   3: {
    1: [
    "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II",
    "PRT 310: Philosophy of Religion",
    "REL 314: Studies in New Testament II",
    "EDR 318: Religious Education II"
    ]
   },
   4: {
    1: [
    "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management",
    "BAS 401: Issues in Social Ethics",
    "THL 411: Studies in Old Testament II",
    "REL 415E: Psychology of Religion",
    "REL 414: Guidance and Counselling in Religion"
    ]
   }
    },
    "his/cre": {
      1: {
      1: [
        "HIS 110: Introduction to African History up to 1884",
        "HIS 111: Introduction to world civilization up to 1500",
        "PRT 110: Introduction to Ethics",
        "REL 110: Traditional African Worldview",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "HIS 210: History of Kenya up to 1895",
    "HIS 211: Themes in East Africa History",
    "REL 213: Studies in the New Testament I",
    "BAS 202: Introduction to Political philosophy",
    "REL 211: History of Christianity I",
       "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "HIS 311: African History Since 1900",
    "HIS 321: Modern Trends in African History",
    "HIS 314 Themes in World History",
     "PRT 310: Philosophy of Religion",
    "REL 314: Studies in New Testament II",
    "EDR 318: Religious Education II"
  ]
  },
  4: {
  1: [
    "HIS 414: History of Science and Technology",
    "HIS 416: History of Diplomacy",
    "EDR 410: History Education II",
    "BAS 401: Issues in Social Ethics",
    "THL 411: Studies in Old Testament II",
    "REL 415E: Psychology of Religion",
    "REL 414: Guidance and Counselling in Religion"
  ]
  }
    },
    "geo/his": {
      1: {
      1: [
        "GEO 110: The Earth’s Physical Environment",
        "GEO 111: The Development of Geographic Thought",
         "HIS 110: Introduction to African History up to 1884",
        "HIS 111: Introduction to world civilization up to 1500",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
   "HIS 210: History of Kenya up to 1895",
    "HIS 211: Themes in East Africa History",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
    3: {
    1: [
     "HIS 311: African History Since 1900",
    "HIS 321: Modern Trends in African History",
    "HIS 314: Themes in World History",
    "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II"
    ]
    },
  4: {
  1: [
    "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management",
     "HIS 414: History of Science and Technology",
    "HIS 416: History of Diplomacy",
    "EDR 410: History Education II",
  ]
  }
    },
    "geo/bus": {
      1: {
      1: [
         "GEO 110: The Earth’s Physical Environment",
        "GEO 111: The Development of Geographic Thought",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        
      ]
      },
    2: {
    1: [
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "BUS  211: statistics",
    "BUS 212: principles of marketing",
    "CIM 233: Subject Methods in Social Studies",
       "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
   "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II",
    "BAM 311: Production & Operations Management",
    "BAM 310: Business Communication",
    "EDB 314: Business Education II"
  ]
  },
4: {
1: [
   "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management",
    "BAM 410: Strategic Management",
    "BAM 411: Research Methods in Business",
    "BAM 414: Contemporary Issues in Management"
]
}
    },
    "agric/geo": {
      1: {
     1: [
        "AGRIC 111: Introduction to Soil Science and Management",
        "AGRIC 112: Principles of Crop Production",
          "GEO 110: The Earth’s Physical Environment",
        "GEO 111: The Development of Geographic Thought",
              "PSY 110: Quantitative and Qualitative Techniques in Education",
         "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
        ]
        },
      2: {
      1: [
    "AGR 212: Animal Feeds and Nutrition",
    "AGR 211: Annual Crops",
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
      ]
      },
    3: {
    1: [
    "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II",
    "AGR 311: Crop Production",
    "AGR 314 Soil Science",
    "EDR 316 Agriculture Education II"
    ]
    },
  4: {
  1: [
    "AGR 411: Agricultural Economics",
    "AGR 412: Livestock Production",
       "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management"
  ]
  }
      },
      "bio/geo": {
        1: {
          1: [
         "GEO 110: The Earth’s Physical Environment",
        "GEO 111: The Development of Geographic Thought",
        "BIO 111: Cell Biology",
        "BIO 112: General Botany",
        "PSY 110: Quantitative and Qualitative Techniques in Education",
    "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
          ]
        },
      2: {
      1: [
      "BOT 212: Plant Systematic and Taxonomy",
      "BIO 211: Fundamentals of Ecology",
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning",
      "CIM 217: Integrated Science Subject Methods"
      ]
      },
    3: {
    1: [
      "BIO 311: Environmental Biology",
      "BIO 314: Vertebrate Zoology",
      "EDB 315: Biology Education II",
       "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II",
    ]
    },
  4: {
  1: [
    "BIO 411 Molecular Genetics",
    "BIO 412 Immunology",
     "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management"
  ]
  }
      },
    "math/geo": {
      1: {
      1: [
       "MAT 112: Differential Calculus I",
        "MAT 111: Basic Mathematics and Analytical Geometry",
         "GEO 110: The Earth’s Physical Environment",
        "GEO 111: The Development of Geographic Thought",
              "PSY 110: Quantitative and Qualitative Techniques in Education",
    "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
      ]
      },
    2: {
    1: [
      "MAT 212: Real Analysis I",
      "MAT 211: Linear Algebra I",
    "GEO 211: Spatial Organization",
    "GEO 210: Introduction to Cartography",
    "CIM 233: Subject Methods in Social Studies",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
   "GEO 311: Fieldwork and Research Methods in Geography",
    "GEO 322: Biogeography",
    "EDL 312: Geography Education II",
    "MAT 311: Abstract Algebra",
    "MAT 314: Real Analysis",
    "EDE 315: Mathematics Education II"
  ]
  },
  4: {
  1: [
    "MAT 411: Complex Analysis",
    "MAT 412: Differential Geometry",
      "GEO 410: Agricultural Geography",
    "GEO 413: Climate Change and Variability",
    "GEO 412: Environmental Planning and Management"
  ]
  }
    },
    "math/bus": {
      1: {
      1: [
      "MAT 112: Differential Calculus I",
     "MAT 111: Basic Mathematics and Analytical Geometry",
            "PSY 110: Quantitative and Qualitative Techniques in Education",
    "SNE 100: Special Needs and inclusive Education",
        "EMP 100: Teacher Education and the Teaching Profession",
       "CIM 110: Communication Skills in Education"
      ]
      },
    2: {
    1: [
    "MAT 212: Real Analysis I",
   "MAT 211: Linear Algebra I",
   "BUS  211: statistics",
    "BUS 212: principles of marketing",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
    ]
    },
  3: {
  1: [
    "MAT 311: Abstract Algebra",
    "MAT 314: Real Analysis",
    "EDE 315: Mathematics Education II",
    "BAM 311: Production & Operations Management",
    "BAM 310: Business Communication",
    "BAM 320: Total Quality Management"
  ]
  }, 
4: {
1: [
 "MAT 411: Complex Analysis",
  "MAT 412: Differential Geometry",
  "BAM 410: Strategic Management",
  "BAM 411: Research Methods in Business",
  "BAM 414: Contemporary Issues in Management"
]
}
    }, 
    "his/bus": {
      1: {},
      2: {
      1: [
        "HIS 210: History of Kenya up to 1895",
    "HIS 211: Themes in East Africa History",
     "BUS  211: statistics",
    "BUS 212: principles of marketing",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
      ]
      }
    }, 
   "kis/bus": {
     1: {},
     2: {
       1: [
        "KIS 212: Phonetics and Phonology in Kiswahili",
    "KIS 211: Theories and Analysis of Kiswahili Literature",
    "BUS  211: statistics",
    "BUS 212: principles of marketing",
     "EDF 210: Philosophy of Education",
          "CIM 230: Curriculum design and Development",
          "CIM 210: Pedagogical Approaches and strategies",
          "PSY 210: Psychology of Human development and Learning"
       ]
     }
   }
    }
  }
  
  
  const notes = { };
  export { notes };
  
  export { programsEducation };
  