var APP_DATA = {
  "scenes": [
    {
      "id": "0-garasi",
      "name": "Garasi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.0632160692924213,
        "pitch": -0.0051007429997280695,
        "fov": 1.3606615820187444
      },
      "linkHotspots": [
        {
          "yaw": -3.140066705607575,
          "pitch": 0.0011551704413541586,
          "rotation": 0,
          "target": "1-ruang-tamu"
        },
        {
          "yaw": 2.6890069511220673,
          "pitch": -0.041788329834965054,
          "rotation": 0,
          "target": "12-dapur"
        },
        {
          "yaw": -2.993020247671897,
          "pitch": 0.24442839572253305,
          "rotation": 3.141592653589793,
          "target": "14-teras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ruang-tamu",
      "name": "Ruang Tamu",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.743614367627451,
          "pitch": -0.030610782388690083,
          "rotation": 0,
          "target": "14-teras"
        },
        {
          "yaw": 1.5880211501075854,
          "pitch": -0.3470530503907252,
          "rotation": 5.497787143782138,
          "target": "2-tangga"
        },
        {
          "yaw": 0.002035297420498239,
          "pitch": 0.3493096707201353,
          "rotation": 0,
          "target": "10-menuju-dapur"
        },
        {
          "yaw": -0.05459149484795489,
          "pitch": -0.04773519416051464,
          "rotation": 0,
          "target": "13-toilet-bawah"
        },
        {
          "yaw": -0.442057159495862,
          "pitch": -0.000591917793602903,
          "rotation": 4.71238898038469,
          "target": "12-dapur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tangga",
      "name": "Tangga",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8661047946849472,
          "pitch": -0.27798727576087146,
          "rotation": 11.780972450961727,
          "target": "3-menuju-atas"
        },
        {
          "yaw": -0.629675860295043,
          "pitch": 0.6883097874891284,
          "rotation": 7.0685834705770345,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-menuju-atas",
      "name": "Menuju atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2107787613489247,
          "pitch": 0.7695231263431221,
          "rotation": 1.5707963267948966,
          "target": "2-tangga"
        },
        {
          "yaw": 0.48610025064294327,
          "pitch": -0.016198385554655914,
          "rotation": 12.566370614359176,
          "target": "4-lantai-2a"
        },
        {
          "yaw": 0.1387793746749253,
          "pitch": -0.38621750780048814,
          "rotation": 4.71238898038469,
          "target": "5-kamar-3"
        },
        {
          "yaw": 0.7375633096382153,
          "pitch": -0.27083340920033905,
          "rotation": 1.5707963267948966,
          "target": "6-kamar-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lantai-2a",
      "name": "Lantai 2a",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1485381860905921,
          "pitch": 0.8232984044914353,
          "rotation": 1.5707963267948966,
          "target": "3-menuju-atas"
        },
        {
          "yaw": 1.969721081925993,
          "pitch": 0.4196981619098459,
          "rotation": 3.141592653589793,
          "target": "5-kamar-3"
        },
        {
          "yaw": -1.2670533471031753,
          "pitch": 0.2988877604065543,
          "rotation": 3.141592653589793,
          "target": "6-kamar-2"
        },
        {
          "yaw": -2.968797390569714,
          "pitch": 0.581834317510399,
          "rotation": 0,
          "target": "7-lantai-2b"
        },
        {
          "yaw": -3.0321313502805154,
          "pitch": -0.055061809055583666,
          "rotation": 0,
          "target": "9-roof-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kamar-3",
      "name": "Kamar 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3256170250945338,
          "pitch": 0.3808332532319554,
          "rotation": 7.853981633974483,
          "target": "4-lantai-2a"
        },
        {
          "yaw": 1.2883868570653547,
          "pitch": 0.05093032061787639,
          "rotation": 3.141592653589793,
          "target": "6-kamar-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kamar-2",
      "name": "Kamar 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1230486062013085,
          "pitch": 0.35292503751758986,
          "rotation": 1.5707963267948966,
          "target": "4-lantai-2a"
        },
        {
          "yaw": -2.312164403833389,
          "pitch": 0.04224527893608432,
          "rotation": 3.141592653589793,
          "target": "5-kamar-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lantai-2b",
      "name": "Lantai 2b",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0548655204462074,
          "pitch": 0.5781927614699782,
          "rotation": 0,
          "target": "4-lantai-2a"
        },
        {
          "yaw": 2.342922574872693,
          "pitch": 0.2538852235862663,
          "rotation": 7.853981633974483,
          "target": "5-kamar-3"
        },
        {
          "yaw": 1.8843574909480454,
          "pitch": 0.34248234922653964,
          "rotation": 1.5707963267948966,
          "target": "3-menuju-atas"
        },
        {
          "yaw": 0.2250777342581305,
          "pitch": 0.22755513141731498,
          "rotation": 5.497787143782138,
          "target": "8-toilet-atas"
        },
        {
          "yaw": -2.220945023773343,
          "pitch": 0.028647623219502094,
          "rotation": 0.7853981633974483,
          "target": "9-roof-top"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.856297772588067,
          "pitch": 0.0678402517751735,
          "title": "Tangga",
          "text": "Menuju ke bawah"
        }
      ]
    },
    {
      "id": "8-toilet-atas",
      "name": "Toilet atas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1987493103338842,
          "pitch": 0.3458167588512282,
          "rotation": 4.71238898038469,
          "target": "7-lantai-2b"
        },
        {
          "yaw": 1.4344184654465684,
          "pitch": -0.009671442823346865,
          "rotation": 7.853981633974483,
          "target": "9-roof-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-roof-top",
      "name": "Roof top",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.500079046174233,
          "pitch": 0.10471788193666143,
          "rotation": 0,
          "target": "7-lantai-2b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-menuju-dapur",
      "name": "Menuju dapur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33657644494933336,
          "pitch": 0.40941446632284517,
          "rotation": 11.780972450961727,
          "target": "1-ruang-tamu"
        },
        {
          "yaw": 0.3967685083663284,
          "pitch": 0.02571508670568079,
          "rotation": 0,
          "target": "14-teras"
        },
        {
          "yaw": -0.5217390296460174,
          "pitch": -0.3653974119298642,
          "rotation": 5.497787143782138,
          "target": "2-tangga"
        },
        {
          "yaw": -1.8879291681164254,
          "pitch": 0.3070546894173223,
          "rotation": 0,
          "target": "11-kamar-1"
        },
        {
          "yaw": 2.381867170408106,
          "pitch": -0.07943228014017478,
          "rotation": 10.995574287564278,
          "target": "12-dapur"
        },
        {
          "yaw": -2.8811961710006315,
          "pitch": 0.07510882018796394,
          "rotation": 0,
          "target": "13-toilet-bawah"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kamar-1",
      "name": "Kamar 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5605214099916989,
          "pitch": 0.37220782258460616,
          "rotation": 0,
          "target": "10-menuju-dapur"
        },
        {
          "yaw": 0.9275323534281021,
          "pitch": 0.01286882260585287,
          "rotation": 0,
          "target": "12-dapur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dapur",
      "name": "Dapur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12790414134193995,
          "pitch": 0.0147484334770418,
          "rotation": 0,
          "target": "11-kamar-1"
        },
        {
          "yaw": 0.48901811390242855,
          "pitch": -0.2630801914084788,
          "rotation": 11.780972450961727,
          "target": "2-tangga"
        },
        {
          "yaw": 0.07917684026434912,
          "pitch": 0.4735104039735525,
          "rotation": 1.5707963267948966,
          "target": "10-menuju-dapur"
        },
        {
          "yaw": 1.3540909425789014,
          "pitch": 0.22228386295528502,
          "rotation": 0,
          "target": "0-garasi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-toilet-bawah",
      "name": "Toilet bawah",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5027258388448521,
          "pitch": 0.5386779292863704,
          "rotation": 0,
          "target": "10-menuju-dapur"
        },
        {
          "yaw": 1.0769561377350136,
          "pitch": -0.06479806991882064,
          "rotation": 4.71238898038469,
          "target": "11-kamar-1"
        },
        {
          "yaw": 1.4156172570282521,
          "pitch": -0.07906288463126643,
          "rotation": 0,
          "target": "14-teras"
        },
        {
          "yaw": 1.41365113301136,
          "pitch": 0.1895641926454168,
          "rotation": 5.497787143782138,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-teras",
      "name": "Teras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.844234878510086,
          "pitch": 0.37070736205123644,
          "rotation": 0,
          "target": "0-garasi"
        },
        {
          "yaw": -0.09358256663054121,
          "pitch": 0.15064738814967527,
          "rotation": 0,
          "target": "1-ruang-tamu"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vlatava 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
