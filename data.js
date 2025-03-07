var APP_DATA = {
  "scenes": [
    {
      "id": "0-ban-mae-hat",
      "name": "Ban Mae Hat",
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
        "yaw": -2.4313916350037754,
        "pitch": -0.0435231650724468,
        "fov": 1.0072273583583777
      },
      "linkHotspots": [
        {
          "yaw": 2.7643588925707334,
          "pitch": 0.2391074190356246,
          "rotation": 0,
          "target": "1-karen-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.270069907292809,
          "pitch": 0.08236936847271181,
          "title": "Ban Mae Hat",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Ban Mae Hat is the karen village in Khun Yuam, Mae Hong Son, one of the rich livelihood of the Karen.</span>"
        }
      ]
    },
    {
      "id": "1-karen-house",
      "name": "Karen House",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 1.8474006801471257,
        "pitch": 0.08197606595657092,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.31791553313725984,
          "pitch": 0.2021666405091036,
          "rotation": 0,
          "target": "2-water_tank_mae_hat"
        },
        {
          "yaw": -0.8113862124788618,
          "pitch": 0.12994016508877593,
          "rotation": 0,
          "target": "0-ban-mae-hat"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9376991015283895,
          "pitch": 0.21320550141402173,
          "title": "Karen House",
          "text": "Karen house is made of wood, and mostly built by the villagers, where this is the cooking area and place to store equipments."
        }
      ]
    },
    {
      "id": "2-water_tank_mae_hat",
      "name": "Water_Tank_Mae_Hat",
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
      "faceSize": 1620,
      "initialViewParameters": {
        "yaw": -0.14067409640764517,
        "pitch": -0.099457475761632,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.8366765368877367,
          "pitch": 0.29881257480401757,
          "rotation": 0,
          "target": "1-karen-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3044445955848847,
          "pitch": -0.27849849426350204,
          "title": "Water Infrastructure",
          "text": "<div>The Karen Hill Tribe Trust build water infrastructure and water supplies for remote Karen Community. Each of these two water tanks stores 10,000 liters of water, providing a reliable supply for the villagers.</div>"
        }
      ]
    }
  ],
  "name": "Ban Mae Hat",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
