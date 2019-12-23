export default {
  'test': {
    'version': 8,
    'postercolor': '#1b1b1b',
    'name': 'Light',
    'metadata': {
      'mapbox:type': 'default',
      'mapbox:origin': 'light-v10',
      'mapbox:autocomposite': true,
      'mapbox:groups': {
        '1444855786460.0557': {
          'name': 'Roads',
          'collapsed': false
        },
        '1444855769305.6016': {
          'name': 'Tunnels',
          'collapsed': true
        },
        '1444855799204.86': {
          'name': 'Bridges',
          'collapsed': true
        },
        '1444934295202.7542': {
          'name': 'Admin boundaries',
          'collapsed': true
        }
      },
      'mapbox:sdk-support': {
        'js': '0.54.0',
        'android': '7.4.0',
        'ios': '4.11.0'
      }
    },
    'center': [119.50997371333574, 38.83534617719718],
    'zoom': 6.4904240771680275,
    'bearing': 0,
    'pitch': 0,
    'sources': {
      'composite': {
        'url': 'mapbox://mapbox.mapbox-streets-v8',
        'type': 'vector'
      }
    },
    'sprite': 'mapbox://sprites/wangzhendaniel/ck2oddk2y0l3k1cqqgbjz1knm/1sw1ea3lo09xksdnulb73k9a7',
    'glyphs': 'mapbox://fonts/wangzhendaniel/{fontstack}/{range}.pbf',
    'layers': [{
      'id': 'land',
      'type': 'background',
      'layout': {},
      'paint': {
        'background-color': 'hsl(55, 11%, 96%)'
      }
    },
    {
      'id': 'road-pedestrian-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 12,
      'filter': [
        'all',
        ['==', ['get', 'class'], 'pedestrian'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          2,
          18,
          14.5
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      'id': 'road-minor-low',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        [
          'step',
          ['zoom'],
          ['==', ['get', 'class'], 'track'],
          14,
          [
            'match',
            ['get', 'class'],
            ['track', 'secondary_link', 'tertiary_link', 'service'],
            true,
            false
          ]
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          ['match', ['get', 'class'], 'track', 1, 0.5],
          18,
          12
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-opacity': ['step', ['zoom'], 1, 14, 0]
      }
    },
    {
      'id': 'road-street-low',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['street', 'street_limited', 'primary_link'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-opacity': ['step', ['zoom'], 1, 14, 0]
      }
    },
    {
      'id': 'road-minor-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        [
          'step',
          ['zoom'],
          ['==', ['get', 'class'], 'track'],
          14,
          [
            'match',
            ['get', 'class'],
            ['track', 'secondary_link', 'tertiary_link', 'service'],
            true,
            false
          ]
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.75,
          20,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          ['match', ['get', 'class'], 'track', 1, 0.5],
          18,
          12
        ],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      'id': 'road-street-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['street', 'street_limited', 'primary_link'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.75,
          20,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      'id': 'road-secondary-tertiary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['secondary', 'tertiary'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          10,
          0.75,
          18,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.1,
          18,
          26
        ]
      }
    },
    {
      'id': 'road-primary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', ['get', 'class'], 'primary'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          10,
          1,
          18,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.75,
          18,
          32
        ]
      }
    },
    {
      'id': 'road-major-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 10,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['motorway_link', 'trunk_link'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.75,
          20,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        'line-opacity': ['step', ['zoom'], 0, 11, 1]
      }
    },
    {
      'id': 'road-motorway-trunk-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['match', ['get', 'class'],
          ['motorway', 'trunk'], true, false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          10,
          1,
          18,
          2
        ],
        'line-color': 'hsl(156, 12%, 92%)',
        'line-gap-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.75,
          18,
          32
        ],
        'line-opacity': [
          'step',
          ['zoom'],
          ['match', ['get', 'class'], 'motorway', 1, 0],
          6,
          1
        ]
      }
    },
    {
      'id': 'road-construction',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', ['get', 'class'], 'construction'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {},
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          2,
          18,
          18
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [0.4, 0.8]],
          15,
          ['literal', [0.3, 0.6]],
          16,
          ['literal', [0.2, 0.3]],
          17,
          ['literal', [0.2, 0.25]],
          18,
          ['literal', [0.15, 0.15]]
        ]
      }
    },
    {
      'id': 'road-path',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 12,
      'filter': [
        'all',
        ['==', ['get', 'class'], 'path'],
        [
          'step',
          ['zoom'],
          [
            '!',
            [
              'match',
              ['get', 'type'],
              ['steps', 'sidewalk', 'crossing'],
              true,
              false
            ]
          ],
          16,
          ['!=', ['get', 'type'], 'steps']
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          13,
          0.5,
          14,
          1,
          15,
          1,
          18,
          4
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [1, 0]],
          15,
          ['literal', [1.75, 1]],
          16,
          ['literal', [1, 0.75]],
          17,
          ['literal', [1, 0.5]]
        ]
      }
    },
    {
      'id': 'road-steps',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', ['get', 'type'], 'steps'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          15,
          1,
          16,
          1.6,
          18,
          6
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [1, 0]],
          15,
          ['literal', [1.75, 1]],
          16,
          ['literal', [1, 0.75]],
          17,
          ['literal', [0.3, 0.3]]
        ]
      }
    },
    {
      'id': 'road-major-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 10,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['motorway_link', 'trunk_link'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          12,
          0.5,
          14,
          2,
          18,
          18
        ],
        'line-color': 'hsl(0, 0%, 100%)'
      }
    },
    {
      'id': 'road-pedestrian',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 12,
      'filter': [
        'all',
        ['==', ['get', 'class'], 'pedestrian'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          0.5,
          18,
          12
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-dasharray': [
          'step',
          ['zoom'],
          ['literal', [1, 0]],
          15,
          ['literal', [1.5, 0.4]],
          16,
          ['literal', [1, 0.2]]
        ]
      }
    },
    {
      'id': 'road-minor',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        [
          'step',
          ['zoom'],
          ['==', ['get', 'class'], 'track'],
          14,
          [
            'match',
            ['get', 'class'],
            ['track', 'secondary_link', 'tertiary_link', 'service'],
            true,
            false
          ]
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          ['match', ['get', 'class'], 'track', 1, 0.5],
          18,
          12
        ],
        'line-color': 'hsl(0, 0%, 100%)',
        'line-opacity': ['step', ['zoom'], 0, 14, 1]
      }
    },
    {
      'id': 'road-street',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['street', 'street_limited', 'primary_link'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          1,
          1,
          14,
          1,
          18,
          18
        ],
        'line-color': [
          'step',
          ['zoom'],
          'hsl(0, 0%, 100%)',
          20,
          'hsl(0, 0%, 100%)'
        ]
      }
    },
    {
      'id': 'road-secondary-tertiary',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['secondary', 'tertiary'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.1,
          18,
          26
        ],
        'line-color': 'hsl(0, 0%, 100%)'
      }
    },
    {
      'id': 'road-primary',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', ['get', 'class'], 'primary'],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.75,
          18,
          32
        ],
        'line-color': 'hsl(0, 0%, 100%)'
      }
    },
    {
      'id': 'road-motorway-trunk',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['match', ['get', 'class'],
          ['motorway', 'trunk'], true, false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ],
        ['==', ['geometry-type'], 'LineString']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          5,
          0.75,
          18,
          32
        ],
        'line-color': 'hsl(0, 0%, 100%)'
      }
    },
    {
      'id': 'road-rail',
      'type': 'line',
      'metadata': {
        'mapbox:group': '1444855786460.0557'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        [
          'match',
          ['get', 'class'],
          ['major_rail', 'minor_rail'],
          true,
          false
        ],
        ['match', ['get', 'structure'],
          ['none', 'ford'], true, false
        ]
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-width': [
          'interpolate',
          ['exponential', 1.5],
          ['zoom'],
          14,
          0.5,
          20,
          1
        ],
        'line-color': 'hsl(156, 12%, 92%)'
      }
    }
    ],
    'created': '2019-11-07T07:08:22.923Z',
    'id': 'ck2oddk2y0l3k1cqqgbjz1knm',
    'modified': '2019-11-18T11:25:47.805Z',
    'owner': 'wangzhendaniel',
    'visibility': 'private',
    'draft': false
  },
  'classic': {
    'version': 8,
    'postercolor': '#1b1b1b',
    'name': 'Moonlight',
    'metadata': {
      'mapbox:trackposition': false,
      'mapbox:groups': {
        'a636a5194689e7c1dede11bf3cd8dcac': {
          'name': 'Landuse',
          'collapsed': true
        },
        '0cb8c63458cbe21bbe1ad66543f73a04': {
          'name': 'Roads',
          'collapsed': true
        },
        'ab588f3c9c75b626577112146960e2bf': {
          'name': 'Tunnels',
          'collapsed': true
        },
        'd84bd578f1389e89645c76070bd1c761': {
          'name': 'Marine labels',
          'collapsed': true
        },
        '7d43494b5025022bf83d5e73f771a8c5': {
          'name': 'Low zoom labels',
          'collapsed': true
        },
        '1cfc175b0e7532a47eec44b8ede849d8': {
          'name': 'Landcover',
          'collapsed': true
        },
        '4a585425cb0cc2af93b4cdedda86461d': {
          'name': 'Borders',
          'collapsed': true
        },
        '659790aba31107609c41007408bfdeeb': {
          'name': 'Road labels',
          'collapsed': false
        },
        '87eb9fc4e65e33c3909d5992c53c8c22': {
          'name': 'POI labels',
          'collapsed': true
        },
        'f423319a6dab2ed463382f7e7edc5da1': {
          'name': 'Bridges',
          'collapsed': true
        },
        '003e472752e5683c3f8ef9dee45b54a0': {
          'name': 'Misc layers',
          'collapsed': false
        },
        '0e4fe52bb6e07167e428ec66ad643fd7': {
          'name': 'Place labels',
          'collapsed': true
        }
      },
      'mapbox:autocomposite': true,
      'mapbox:sdk-support': {
        'js': '0.54.0',
        'android': '7.4.0',
        'ios': '4.11.0'
      }
    },
    'center': [104.07266116427763, 30.66268927878943],
    'zoom': 10.472670400831374,
    'bearing': 0,
    'pitch': 0,
    'light': {
      'color': 'hsl(0, 0%, 90%)'
    },
    'sources': {
      'composite': {
        'url': 'mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7',
        'type': 'vector'
      }
    },
    'sprite': 'mapbox://sprites/wangzhendaniel/ck3sjf3nu3ty81cqhekiiz1qz/ck2u8j60r58fu0sgyxrigm3cu',
    'glyphs': 'mapbox://fonts/wangzhendaniel/{fontstack}/{range}.pbf',
    'layers': [{
      'id': 'background',
      'type': 'background',
      'layout': {},
      'paint': {
        'background-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'crop',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'maxzoom': 14,
      'filter': ['==', 'class', 'crop'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': 0.01,
        'fill-antialias': false
      }
    },
    {
      'id': 'wood',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'maxzoom': 14,
      'filter': ['==', 'class', 'wood'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': 0.01,
        'fill-antialias': false
      }
    },
    {
      'id': 'scrub',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'maxzoom': 14,
      'filter': ['==', 'class', 'scrub'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': 0.01,
        'fill-antialias': false
      }
    },
    {
      'id': 'grass',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'maxzoom': 14,
      'filter': ['==', 'class', 'grass'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': 0.01,
        'fill-antialias': false
      }
    },
    {
      'id': 'national-parks',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landuse_overlay',
      'filter': ['==', 'class', 'national_park'],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0.01],
            [6, 0.03]
          ]
        }
      }
    },
    {
      'id': 'snow',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'filter': [
        'all',
        ['==', '$type', 'Polygon'],
        ['==', 'class', 'snow']
      ],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': 0.05,
        'fill-antialias': false
      }
    },
    {
      'id': 'pedestrian-road',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 12,
      'filter': [
        'all',
        ['==', '$type', 'Polygon'],
        [
          'all',
          ['==', 'structure', 'none'],
          ['in', 'class', 'path', 'pedestrian']
        ]
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [15.5, 0],
            [16, 0.1]
          ]
        },
        'fill-antialias': true
      }
    },
    {
      'id': 'industrial',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'filter': ['==', 'class', 'industrial'],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-antialias': true,
        'fill-opacity': 0.1
      }
    },
    {
      'id': 'schools',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'Polygon'],
        ['==', 'class', 'school']
      ],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-antialias': true,
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.05]
          ]
        }
      }
    },
    {
      'id': 'hospitals',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'Polygon'],
        ['==', 'class', 'hospital']
      ],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-antialias': true,
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.05]
          ]
        }
      }
    },
    {
      'id': 'cemeteries',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'Polygon'],
        ['==', 'class', 'cemetery']
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.05]
          ]
        },
        'fill-antialias': true
      }
    },
    {
      'id': 'parks',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'filter': ['==', 'class', 'park'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.05]
          ]
        }
      }
    },
    {
      'id': 'pitch',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'minzoom': 15,
      'filter': ['==', 'class', 'pitch'],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.05]
          ]
        }
      }
    },
    {
      'id': 'sand',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'filter': ['==', 'class', 'sand'],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.01]
          ]
        }
      }
    },
    {
      'id': 'water',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'water',
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'waterway-river-canal',
      'type': 'line',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'waterway',
      'minzoom': 8,
      'filter': [
        'any',
        ['==', 'class', 'canal'],
        ['==', 'class', 'river']
      ],
      'layout': {
        'line-cap': {
          'base': 1,
          'stops': [
            [0, 'butt'],
            [11, 'round']
          ]
        },
        'line-join': 'round'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 90%)',
        'line-width': {
          'base': 1.3,
          'stops': [
            [8.5, 0.1],
            [20, 8]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [8, 0],
            [8.5, 1]
          ]
        }
      }
    },
    {
      'id': 'aeroway-polygon',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'aeroway',
      'minzoom': 11,
      'filter': [
        'all',
        ['!=', 'type', 'apron'],
        ['==', '$type', 'Polygon']
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [11, 0],
            [11.5, 1]
          ]
        }
      }
    },
    {
      'id': 'aeroway-runway',
      'type': 'line',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'aeroway',
      'minzoom': 9,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'type', 'runway']
      ],
      'layout': {},
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1.5,
          'stops': [
            [9, 1],
            [18, 80]
          ]
        }
      }
    },
    {
      'id': 'aeroway-taxiway',
      'type': 'line',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'aeroway',
      'minzoom': 9,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'type', 'taxiway']
      ],
      'layout': {},
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1.5,
          'stops': [
            [10, 0.5],
            [18, 20]
          ]
        }
      }
    },
    {
      'id': 'ferry-route',
      'type': 'line',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'class', 'ferry']
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 90%)',
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.75],
            [20, 1]
          ]
        },
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 2]],
            [15, [4, 8]]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [11, 0.2],
            [15, 0.5]
          ]
        }
      }
    },
    {
      'id': 'building',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'source': 'composite',
      'source-layer': 'building',
      'minzoom': 15,
      'filter': [
        'all',
        ['!=', 'type', 'building:part'],
        ['==', 'underground', 'false']
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(0, 0%, 10%)',
        'fill-antialias': true,
        'fill-outline-color': 'hsl(0, 0%, 90%)',
        'fill-opacity': 0.1
      }
    },
    {
      'id': 'tunnel-service-link-track-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-dasharray': [3, 3]
      }
    },
    {
      'id': 'tunnel-street-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'street', 'street_limited']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [13, 0],
            [14, 2],
            [18, 18]
          ]
        },
        'line-dasharray': [3, 3],
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        }
      }
    },
    {
      'id': 'tunnel-secondary-tertiary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.2,
          'stops': [
            [10, 0.75],
            [18, 2]
          ]
        },
        'line-dasharray': [3, 3],
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'tunnel-primary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'primary'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [16, 2]
          ]
        },
        'line-dasharray': [3, 3],
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'tunnel-trunk-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-dasharray': [3, 3]
      }
    },
    {
      'id': 'tunnel-motorway-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-dasharray': [3, 3]
      }
    },
    {
      'id': 'tunnel-trunk-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['==', 'type', 'trunk']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [3, 3]
      }
    },
    {
      'id': 'tunnel-motorway-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-opacity': 1,
        'line-dasharray': [3, 3]
      }
    },
    {
      'id': 'tunnel-construction',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', 'class', 'construction'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-join': 'miter',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 0.5,
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [0.4, 0.8]],
            [15, [0.3, 0.6]],
            [16, [0.2, 0.3]],
            [17, [0.2, 0.25]],
            [18, [0.15, 0.15]]
          ]
        }
      }
    },
    {
      'id': 'tunnel-path',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'path'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 2]
          ]
        },
        'line-dasharray': [0.25, 4],
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 0.5
      }
    },
    {
      'id': 'tunnel-trunk-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': [1, 0]
      }
    },
    {
      'id': 'tunnel-motorway-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': [1, 0]
      }
    },
    {
      'id': 'tunnel-pedestrian',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'pedestrian'],
          ['==', 'structure', 'tunnel']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 0.5,
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.5, 0.4]],
            [16, [1, 0.2]]
          ]
        }
      }
    },
    {
      'id': 'tunnel-service-link-track',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-dasharray': [1, 0],
        'line-opacity': 0.5
      }
    },
    {
      'id': 'tunnel-street',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'street', 'street_limited']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 0.5
      }
    },
    {
      'id': 'tunnel-secondary-tertiary',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': [1, 0]
      }
    },
    {
      'id': 'tunnel-primary',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'primary'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': [1, 0]
      }
    },
    {
      'id': 'tunnel-trunk',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'trunk'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'tunnel-motorway',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'ab588f3c9c75b626577112146960e2bf'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'tunnel']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-dasharray': [1, 0],
        'line-opacity': 1,
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'road-pedestrian-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'pedestrian'],
          ['==', 'structure', 'none']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 2],
            [18, 14.5]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [16, 1]
          ]
        }
      }
    },
    {
      'id': 'road-service-link-track-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-street-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'structure', 'none'],
          ['in', 'class', 'street', 'street_limited']
        ]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [13, 0],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-main-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.2,
          'stops': [
            [10, 0.75],
            [18, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-primary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'primary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-motorway-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 10,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-trunk-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [7, 0.4],
            [9, 0.5],
            [10, 1]
          ]
        }
      }
    },
    {
      'id': 'road-trunk-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 5,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'trunk']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [7, 0.5],
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.5],
            [9, 1.4],
            [18, 32]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [6, 0],
            [6.1, 1]
          ]
        }
      }
    },
    {
      'id': 'road-motorway-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [7, 0.25],
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-opacity': 1
      }
    },
    {
      'id': 'road-construction',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'construction'],
          ['==', 'structure', 'none']
        ]
      ],
      'layout': {
        'line-join': 'miter',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        },
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [0.4, 0.8]],
            [15, [0.3, 0.6]],
            [16, [0.2, 0.3]],
            [17, [0.2, 0.25]],
            [18, [0.15, 0.15]]
          ]
        }
      }
    },
    {
      'id': 'road-sidewalks',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['!in', 'structure', 'bridge', 'tunnel'],
          ['in', 'type', 'crossing', 'sidewalk']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 3]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-dasharray': [0.25, 1],
        'line-opacity': {
          'base': 1,
          'stops': [
            [16, 0],
            [16.25, 1]
          ]
        }
      }
    },
    {
      'id': 'road-path',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['!in', 'structure', 'bridge', 'tunnel'],
          ['!in', 'type', 'crossing', 'sidewalk'],
          ['==', 'class', 'path']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible',
        'line-cap': 'round'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-dasharray': [0.25, 4],
        'line-opacity': {
          'base': 1,
          'stops': [
            [14, 0],
            [14.25, 0.75]
          ]
        }
      }
    },
    {
      'id': 'road-trunk-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1
      }
    },
    {
      'id': 'road-motorway-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 10,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1
      }
    },
    {
      'id': 'road-pedestrian',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'pedestrian'],
          ['==', 'structure', 'none']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.5, 0.4]],
            [16, [1, 0.2]]
          ]
        }
      }
    },
    {
      'id': 'road-service-link-track',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'road-street',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'structure', 'none'],
          ['in', 'class', 'street', 'street_limited']
        ]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        }
      }
    },
    {
      'id': 'road-secondary-tertiary',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['in', 'class', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    },
    {
      'id': 'road-primary',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'primary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    },
    {
      'id': 'road-trunk',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 5,
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'trunk']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.5],
            [9, 1.4],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1
      }
    },
    {
      'id': 'road-motorway',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'structure', 'bridge', 'tunnel'],
        ['==', 'class', 'motorway']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1
      }
    },
    {
      'id': 'road-rail-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['!=', 'structure', 'tunnel'],
        ['in', 'class', 'major_rail', 'minor_rail']
      ],
      'layout': {
        'line-join': 'miter',
        'line-cap': 'square',
        'visibility': 'visible'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1.25,
          'stops': [
            [14, 3],
            [20, 4]
          ]
        },
        'line-dasharray': [0.25, 10]
      }
    },
    {
      'id': 'road-rail',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['!=', 'structure', 'tunnel'],
        ['in', 'class', 'major_rail', 'minor_rail']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1,
          'stops': [
            [14, 0.75],
            [20, 1]
          ]
        }
      }
    },
    {
      'id': 'road-subway',
      'type': 'line',
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'type', 'subway'],
        ['in', 'class', 'major_rail', 'minor_rail']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-dasharray': [2, 1],
        'line-width': {
          'base': 1.25,
          'stops': [
            [14, 1],
            [17, 2.25]
          ]
        },
        'line-opacity': {
          'base': 1.25,
          'stops': [
            [14, 0.25],
            [17, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-pedestrian-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'pedestrian'],
          ['==', 'structure', 'bridge']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 2],
            [18, 14.5]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-service-link-track-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['==', 'structure', 'bridge'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        }
      }
    },
    {
      'id': 'bridge-street-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['in', 'class', 'street', 'street_limited']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        },
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [13, 0],
            [14, 2],
            [18, 18]
          ]
        }
      }
    },
    {
      'id': 'bridge-secondary-tertiary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['in', 'class', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.2,
          'stops': [
            [10, 0.75],
            [18, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-translate': [0, 0]
      }
    },
    {
      'id': 'bridge-primary-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'primary'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-translate': [0, 0]
      }
    },
    {
      'id': 'bridge-trunk-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [10.99, 0],
            [11, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-motorway-link-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['<=', 'layer', 1],
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': 1
      }
    },
    {
      'id': 'bridge-trunk-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'trunk'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        }
      }
    },
    {
      'id': 'bridge-motorway-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [7, 0.5],
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        }
      }
    },
    {
      'id': 'bridge-construction',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', 'class', 'construction'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'miter',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        },
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [0.4, 0.8]],
            [15, [0.3, 0.6]],
            [16, [0.2, 0.3]],
            [17, [0.2, 0.25]],
            [18, [0.15, 0.15]]
          ]
        }
      }
    },
    {
      'id': 'bridge-path',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'path'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 4]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-dasharray': [0.5, 2],
        'line-opacity': {
          'base': 1,
          'stops': [
            [14, 0],
            [14.25, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-trunk-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['!in', 'layer', 2, 3, 4, 5],
        ['==', 'structure', 'bridge'],
        ['==', 'type', 'trunk_link']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-motorway-link',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['!in', 'layer', 2, 3, 4, 5],
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-pedestrian',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 16,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'all',
          ['==', 'class', 'pedestrian'],
          ['==', 'structure', 'bridge']
        ]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': 1,
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.5, 0.4]],
            [16, [1, 0.2]]
          ]
        }
      }
    },
    {
      'id': 'bridge-service-link-track',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 14,
      'filter': [
        'all',
        ['!=', 'type', 'trunk_link'],
        ['==', 'structure', 'bridge'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-street',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 11,
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['in', 'class', 'street', 'street_limited']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13, 0],
            [14, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-secondary-tertiary',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['in', 'type', 'secondary', 'tertiary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-primary',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['==', 'type', 'primary']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-trunk',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['!in', 'layer', 2, 3, 4, 5],
        ['==', 'class', 'trunk'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-motorway',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['<', 'layer', 2],
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'bridge']
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-trunk-link-2-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['==', 'type', 'trunk_link'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [10.99, 0],
            [11, 1]
          ]
        }
      }
    },
    {
      'id': 'bridge-motorway-link-2-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.75],
            [20, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-opacity': 1
      }
    },
    {
      'id': 'bridge-trunk-2-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'trunk'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        }
      }
    },
    {
      'id': 'bridge-motorway-2-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [7, 0.5],
            [10, 1],
            [16, 2]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-gap-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        }
      }
    },
    {
      'id': 'bridge-trunk-link-2',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'structure', 'bridge'],
        ['==', 'type', 'trunk_link'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-motorway-link-2',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'minzoom': 13,
      'filter': [
        'all',
        ['==', 'class', 'motorway_link'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-trunk-2',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'trunk'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'bridge-motorway-2',
      'type': 'line',
      'metadata': {
        'mapbox:group': 'f423319a6dab2ed463382f7e7edc5da1'
      },
      'source': 'composite',
      'source-layer': 'road',
      'filter': [
        'all',
        ['==', 'class', 'motorway'],
        ['==', 'structure', 'bridge'],
        ['>=', 'layer', 2]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'border-admin-3-4-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'source': 'composite',
      'source-layer': 'admin',
      'filter': ['all', ['==', 'maritime', 0],
        ['>=', 'admin_level', 3]
      ],
      'layout': {
        'line-join': 'bevel',
        'visibility': 'visible'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 90%)',
        'line-width': {
          'base': 1,
          'stops': [
            [3, 2.25],
            [10, 4.5]
          ]
        },
        'line-opacity': {
          'base': 1.25,
          'stops': [
            [4, 0],
            [8, 0.5]
          ]
        },
        'line-dasharray': [1, 0],
        'line-translate': [0, 0],
        'line-blur': {
          'base': 1,
          'stops': [
            [3, 0],
            [8, 2]
          ]
        }
      }
    },
    {
      'id': 'border-admin-2-case',
      'type': 'line',
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'source': 'composite',
      'source-layer': 'admin',
      'minzoom': 1,
      'filter': ['all', ['==', 'admin_level', 2],
        ['==', 'maritime', 0]
      ],
      'layout': {
        'line-join': 'miter',
        'visibility': 'visible'
      },
      'paint': {
        'line-width': {
          'base': 1,
          'stops': [
            [3, 3],
            [10, 9]
          ]
        },
        'line-color': 'hsl(0, 0%, 90%)',
        'line-opacity': {
          'base': 1,
          'stops': [
            [3, 0],
            [4, 0.5]
          ]
        },
        'line-translate': [0, 0],
        'line-blur': {
          'base': 1,
          'stops': [
            [3, 0],
            [10, 2]
          ]
        }
      }
    },
    {
      'id': 'border-admin-3-4',
      'type': 'line',
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'source': 'composite',
      'source-layer': 'admin',
      'filter': ['all', ['==', 'maritime', 0],
        ['>=', 'admin_level', 3]
      ],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-dasharray': {
          'base': 1,
          'stops': [
            [6, [2, 1]],
            [7, [2, 2, 6, 2]]
          ]
        },
        'line-width': {
          'base': 1,
          'stops': [
            [7, 0.75],
            [12, 1.5]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [2.75, 0],
            [3, 0.5]
          ]
        },
        'line-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'border-admin-2',
      'type': 'line',
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'source': 'composite',
      'source-layer': 'admin',
      'minzoom': 1,
      'filter': [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 0],
        ['==', 'maritime', 0]
      ],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1,
          'stops': [
            [3, 1],
            [10, 2.5]
          ]
        }
      }
    },
    {
      'id': 'border-admin-2-dispute',
      'type': 'line',
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'source': 'composite',
      'source-layer': 'admin',
      'minzoom': 1,
      'filter': [
        'all',
        ['==', 'admin_level', 2],
        ['==', 'disputed', 1],
        ['==', 'maritime', 0]
      ],
      'layout': {
        'line-join': 'round',
        'visibility': 'visible'
      },
      'paint': {
        'line-dasharray': [1.5, 1.5],
        'line-color': 'hsl(0, 0%, 10%)',
        'line-width': {
          'base': 1,
          'stops': [
            [3, 0.5],
            [10, 2]
          ]
        },
        'line-opacity': 0.75
      }
    },
    {
      'id': 'road-label-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'source': 'composite',
      'source-layer': 'road_label',
      'minzoom': 16,
      'filter': [
        'all',
        [
          '!in',
          'class',
          '',
          'ferry',
          'link',
          'motorway',
          'path',
          'pedestrian',
          'primary',
          'secondary',
          'street',
          'street_limited',
          'tertiary',
          'track',
          'trunk'
        ],
        ['==', '$type', 'LineString']
      ],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [15, 10],
            [20, 12]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 500,
        'text-font': ['Montserrat Italic'],
        'symbol-placement': 'line',
        'text-field': '{name_en}',
        'text-rotation-alignment': 'map',
        'text-offset': [0, -0.2]
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': {
          'base': 1,
          'stops': [
            [15.5, 1.25],
            [16.5, 2.5]
          ]
        },
        'text-halo-blur': 0
      }
    },
    {
      'id': 'road-label-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'source': 'composite',
      'source-layer': 'road_label',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        [
          'in',
          'class',
          '',
          'link',
          'pedestrian',
          'street',
          'street_limited'
        ]
      ],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [11, 10],
            [20, 14]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 500,
        'text-font': ['Montserrat Italic'],
        'symbol-placement': 'line',
        'text-field': '{name_en}',
        'text-rotation-alignment': 'map',
        'text-offset': [0, -0.4]
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': {
          'base': 1,
          'stops': [
            [15.5, 1.25],
            [16.5, 2.5]
          ]
        },
        'text-halo-blur': 0
      }
    },
    {
      'id': 'road-label-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'source': 'composite',
      'source-layer': 'road_label',
      'minzoom': 13,
      'filter': [
        'in',
        'class',
        'motorway',
        'primary',
        'secondary',
        'tertiary',
        'trunk'
      ],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [9, 10],
            [20, 16]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 400,
        'text-font': ['Montserrat Italic'],
        'symbol-placement': 'line',
        'text-offset': [0, -0.5],
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': {
          'base': 1,
          'stops': [
            [15.5, 1],
            [16.5, 2]
          ]
        },
        'text-halo-blur': 0
      }
    },
    {
      'id': '3D Buildings',
      'type': 'fill-extrusion',
      'source': 'composite',
      'source-layer': 'building',
      'minzoom': 15,
      'filter': [
        'all',
        ['==', 'extrude', 'true'],
        ['==', 'underground', 'false']
      ],
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'fill-extrusion-color': 'hsl(0, 0%, 90%)',
        'fill-extrusion-height': {
          'base': 1,
          'type': 'exponential',
          'property': 'height',
          'stops': [
            [{
              'zoom': 15,
              'value': 1
            }, 0],
            [{
              'value': 100,
              'zoom': 15
            }, 0],
            [{
              'zoom': 15.05,
              'value': 1
            }, 0],
            [{
              'value': 1000,
              'zoom': 15.05
            }, 1000]
          ]
        },
        'fill-extrusion-opacity': 0.9,
        'fill-extrusion-base': {
          'base': 1,
          'type': 'exponential',
          'property': 'min_height',
          'stops': [
            [0, 0],
            [1000, 1000]
          ]
        }
      }
    },
    {
      'id': 'poi-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 15,
      'filter': [
        'all',
        [
          '!in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ],
        ['in', 'scalerank', 3, 4]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [16, 10],
            [20, 12]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'poi-parks-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 15,
      'filter': [
        'all',
        [
          'in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ],
        ['in', 'scalerank', 3, 4]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [16, 10],
            [20, 12]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'poi-parks-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 14,
      'filter': [
        'all',
        ['==', 'scalerank', 2],
        [
          'in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [14, 11],
            [20, 12]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'poi-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 14,
      'filter': [
        'all',
        [
          '!in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ],
        ['==', 'scalerank', 2]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [14, 11],
            [20, 12]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'visibility': 'visible',
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'waterway-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'waterway_label',
      'minzoom': 12,
      'filter': ['in', 'class', 'canal', 'river'],
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Montserrat Medium'],
        'symbol-placement': 'line',
        'text-max-angle': 30,
        'text-size': {
          'base': 1,
          'stops': [
            [13, 12],
            [18, 16]
          ]
        },
        'visibility': 'visible'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'water-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'water_label',
      'minzoom': 5,
      'filter': ['>', 'area', 10000],
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Montserrat Medium'],
        'text-max-width': 7,
        'text-size': {
          'base': 1,
          'stops': [
            [13, 14],
            [18, 18]
          ]
        },
        'symbol-avoid-edges': false,
        'text-rotation-alignment': 'viewport',
        'visibility': 'visible'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'poi-parks-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 6,
      'filter': [
        'all',
        ['<=', 'scalerank', 1],
        [
          'in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': 12,
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'poi-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'poi_label',
      'minzoom': 12,
      'filter': [
        'all',
        [
          '!in',
          'maki',
          'campsite',
          'cemetery',
          'dog-park',
          'garden',
          'golf',
          'park',
          'picnic-site',
          'playground',
          'zoo'
        ],
        ['<=', 'scalerank', 1]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1.5,
          'stops': [
            [10, 12],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'visibility': 'visible',
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'ferry-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'road_label',
      'minzoom': 12,
      'filter': [
        'all',
        ['==', 'class', 'ferry'],
        ['in', '$type', 'LineString', 'Point']
      ],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [14, 11],
            [20, 12]
          ]
        },
        'symbol-avoid-edges': false,
        'text-max-angle': 30,
        'symbol-spacing': 400,
        'text-font': ['Montserrat Medium'],
        'symbol-placement': 'line',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1
      }
    },
    {
      'id': 'rail-station-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'rail_station_label',
      'minzoom': 12,
      'filter': ['in', '$type', 'LineString', 'Point', 'Polygon'],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [14, 11],
            [20, 12]
          ]
        },
        'symbol-avoid-edges': false,
        'text-max-angle': 30,
        'symbol-spacing': 400,
        'text-font': ['Montserrat Medium'],
        'symbol-placement': 'point',
        'text-rotation-alignment': 'viewport',
        'text-field': '{name_en}'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1
      }
    },
    {
      'id': 'airport-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'source': 'composite',
      'source-layer': 'airport_label',
      'minzoom': 10,
      'filter': ['<=', 'scalerank', 2],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 12],
            [18, 18]
          ]
        },
        'symbol-spacing': 250,
        'text-font': ['Montserrat Italic'],
        'text-max-width': 9,
        'text-field': {
          'stops': [
            [11, '{ref}'],
            [14, '{name_en}']
          ]
        }
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'place-islets-archipelago-aboriginal',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'maxzoom': 16,
      'filter': [
        'in',
        'type',
        'aboriginal_lands',
        'archipelago',
        'islet'
      ],
      'layout': {
        'text-line-height': 1.2,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 11],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.25
      }
    },
    {
      'id': 'place-neighbourhood',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 12,
      'maxzoom': 16,
      'filter': ['==', 'type', 'neighbourhood'],
      'layout': {
        'text-field': '{name_en}',
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.1,
        'text-max-width': 7,
        'text-font': ['Montserrat Medium'],
        'text-size': {
          'base': 1,
          'stops': [
            [12, 12],
            [16, 16]
          ]
        }
      },
      'paint': {
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5,
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'place-suburb',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 11,
      'maxzoom': 16,
      'filter': ['==', 'type', 'suburb'],
      'layout': {
        'text-field': '{name_en}',
        'text-transform': 'uppercase',
        'text-font': ['Montserrat Medium'],
        'text-letter-spacing': 0.1,
        'text-max-width': 7,
        'text-size': {
          'base': 1,
          'stops': [
            [12, 12],
            [16, 16]
          ]
        }
      },
      'paint': {
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5,
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'place-hamlet',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 10,
      'maxzoom': 16,
      'filter': ['==', 'type', 'hamlet'],
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Montserrat Medium'],
        'text-size': {
          'base': 1,
          'stops': [
            [12, 12],
            [15, 16]
          ]
        }
      },
      'paint': {
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.25,
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'place-village',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 11,
      'maxzoom': 15,
      'filter': ['==', 'type', 'village'],
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Montserrat Medium'],
        'text-max-width': 7,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 12],
            [16, 18]
          ]
        },
        'text-offset': [0, 0]
      },
      'paint': {
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.25,
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'place-town',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 7,
      'maxzoom': 16,
      'filter': ['==', 'type', 'town'],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [7, 12],
            [15, 20]
          ]
        },
        'text-font': ['Montserrat Medium'],
        'text-max-width': 7,
        'text-offset': [0, 0],
        'text-field': '{name_en}'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.25
      }
    },
    {
      'id': 'place-islands',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'maxzoom': 16,
      'filter': ['==', 'type', 'island'],
      'layout': {
        'text-line-height': 1.2,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 11],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Montserrat Medium'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 7
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.25
      }
    },
    {
      'id': 'place-city-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'maxzoom': 16,
      'filter': [
        'all',
        ['!in', 'scalerank', 0, 1, 2, 3, 4, 5],
        ['==', 'type', 'city']
      ],
      'layout': {
        'text-size': {
          'base': 1.25,
          'stops': [
            [6, 12],
            [14, 26]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 7
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5
      }
    },
    {
      'id': 'place-city-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'maxzoom': 16,
      'filter': [
        'all',
        ['==', 'type', 'city'],
        ['in', 'scalerank', 3, 4, 5]
      ],
      'layout': {
        'text-size': {
          'base': 1.25,
          'stops': [
            [5, 12],
            [12, 26]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'text-anchor': 'center',
        'text-field': '{name_en}',
        'text-max-width': 7
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-halo-width': 1.5
      }
    },
    {
      'id': 'place-city-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'source': 'composite',
      'source-layer': 'place_label',
      'minzoom': 1,
      'maxzoom': 16,
      'filter': ['all', ['<=', 'scalerank', 2],
        ['==', 'type', 'city']
      ],
      'layout': {
        'text-size': {
          'base': 1.25,
          'stops': [
            [4, 12],
            [10, 26]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'text-max-width': 7,
        'text-field': '{name_en}'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1.5,
        'text-halo-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'marine-line-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 3,
      'maxzoom': 10,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['>=', 'labelrank', 4]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [3, 12],
            [6, 16]
          ]
        },
        'symbol-spacing': {
          'base': 1,
          'stops': [
            [4, 100],
            [6, 400]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'symbol-placement': 'line',
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}',
        'text-letter-spacing': 0.1,
        'text-max-width': 5
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'marine-point-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 3,
      'maxzoom': 10,
      'filter': ['all', ['==', '$type', 'Point'],
        ['>=', 'labelrank', 4]
      ],
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 5,
        'text-letter-spacing': 0.1,
        'text-line-height': 1.5,
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [3, 12],
            [6, 16]
          ]
        },
        'visibility': 'visible'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'marine-line-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 2,
      'maxzoom': 8,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['in', 'labelrank', 2, 3]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1.25,
          'stops': [
            [2, 12],
            [5, 20]
          ]
        },
        'symbol-spacing': 250,
        'text-font': ['Montserrat Bold'],
        'symbol-placement': 'line',
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}',
        'text-letter-spacing': 0.15,
        'text-max-width': 5
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'marine-point-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 2,
      'maxzoom': 8,
      'filter': [
        'all',
        ['==', '$type', 'Point'],
        ['in', 'labelrank', 2, 3]
      ],
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 5,
        'text-letter-spacing': 0.15,
        'text-line-height': 1.5,
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1.25,
          'stops': [
            [2, 14],
            [5, 20]
          ]
        },
        'visibility': 'visible'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1,
        'text-halo-blur': 0.25
      }
    },
    {
      'id': 'marine-line-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 1,
      'maxzoom': 5,
      'filter': [
        'all',
        ['==', '$type', 'LineString'],
        ['==', 'labelrank', 1]
      ],
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [1, 12],
            [4, 28]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'symbol-placement': 'line',
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}',
        'text-letter-spacing': 0.25,
        'text-max-width': 4
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1.5,
        'text-halo-blur': 0.5
      }
    },
    {
      'id': 'marine-point-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'source': 'composite',
      'source-layer': 'marine_label',
      'minzoom': 1,
      'maxzoom': 5,
      'filter': ['all', ['==', '$type', 'Point'],
        ['==', 'labelrank', 1]
      ],
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 4,
        'text-letter-spacing': 0.25,
        'text-line-height': 1.5,
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [1, 12],
            [4, 28]
          ]
        },
        'visibility': 'visible'
      },
      'paint': {
        'text-color': 'hsl(0, 0%, 90%)',
        'text-halo-color': 'hsl(0, 0%, 10%)',
        'text-halo-width': 1.5,
        'text-halo-blur': 0.5
      }
    },
    {
      'id': 'state-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'state_label',
      'minzoom': 3,
      'maxzoom': 9,
      'filter': ['<', 'area', 20000],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [5, 10],
            [8, 14]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Montserrat Bold Italic'],
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [6, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15,
        'text-max-width': 5
      },
      'paint': {
        'text-halo-width': 1,
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'state-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'state_label',
      'minzoom': 3,
      'maxzoom': 8,
      'filter': ['all', ['<', 'area', 80000],
        ['>=', 'area', 20000]
      ],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [4, 10],
            [7, 16]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Montserrat Bold Italic'],
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [5, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15,
        'text-max-width': 6
      },
      'paint': {
        'text-halo-width': 1,
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'state-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'state_label',
      'minzoom': 3,
      'maxzoom': 7,
      'filter': ['>=', 'area', 80000],
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [3, 10],
            [6, 18]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Montserrat Bold Italic'],
        'text-max-width': 6,
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [4, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15
      },
      'paint': {
        'text-halo-width': 1,
        'text-color': 'hsl(0, 0%, 10%)',
        'text-halo-color': 'hsl(0, 0%, 90%)'
      }
    },
    {
      'id': 'country-small',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'country_label',
      'minzoom': 1,
      'maxzoom': 10,
      'filter': ['>=', 'scalerank', 5],
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 6,
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1.25,
          'stops': [
            [4, 12],
            [9, 24]
          ]
        }
      },
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'country-medium',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'country_label',
      'minzoom': 1,
      'maxzoom': 8,
      'filter': ['in', 'scalerank', 3, 4],
      'layout': {
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{code}'],
            [2, '{name_en}']
          ]
        },
        'text-max-width': 6,
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1.25,
          'stops': [
            [2, 10],
            [8, 26]
          ]
        }
      },
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-color': 'hsl(0, 0%, 10%)'
      }
    },
    {
      'id': 'country-large',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'source': 'composite',
      'source-layer': 'country_label',
      'minzoom': 1,
      'maxzoom': 7,
      'filter': ['in', 'scalerank', 1, 2],
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': {
          'base': 1,
          'stops': [
            [0, 5],
            [3, 6]
          ]
        },
        'text-font': ['Montserrat Bold'],
        'text-size': {
          'base': 1.25,
          'stops': [
            [1, 10],
            [6, 28]
          ]
        }
      },
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': 'hsl(0, 0%, 90%)',
        'text-color': 'hsl(0, 0%, 10%)'
      }
    }
    ],
    'created': '2019-12-05T09:48:19.680Z',
    'id': 'ck3sjf3nu3ty81cqhekiiz1qz',
    'modified': '2019-12-05T09:48:19.680Z',
    'owner': 'wangzhendaniel',
    'visibility': 'private',
    'draft': false
  },
  'IceCream': {
    'version': 8,
    'postercolor': '#eddcfb',
    'name': 'Ice Cream',
    'metadata': {
      'mapbox:trackposition': false,
      'mapbox:groups': {
        'a636a5194689e7c1dede11bf3cd8dcac': {
          'name': 'Landuse',
          'collapsed': true
        },
        '0cb8c63458cbe21bbe1ad66543f73a04': {
          'name': 'Roads',
          'collapsed': true
        },
        'd84bd578f1389e89645c76070bd1c761': {
          'name': 'Marine labels',
          'collapsed': true
        },
        '7d43494b5025022bf83d5e73f771a8c5': {
          'name': 'Low zoom labels',
          'collapsed': true
        },
        '1cfc175b0e7532a47eec44b8ede849d8': {
          'name': 'Landcover',
          'collapsed': true
        },
        '4a585425cb0cc2af93b4cdedda86461d': {
          'name': 'Borders',
          'collapsed': true
        },
        '659790aba31107609c41007408bfdeeb': {
          'name': 'Road labels',
          'collapsed': true
        },
        '87eb9fc4e65e33c3909d5992c53c8c22': {
          'name': 'POI labels',
          'collapsed': true
        },
        '003e472752e5683c3f8ef9dee45b54a0': {
          'name': 'Misc',
          'collapsed': true
        },
        '0e4fe52bb6e07167e428ec66ad643fd7': {
          'name': 'Place labels',
          'collapsed': true
        }
      },
      'mapbox:autocomposite': true
    },
    'center': [-75.91113580567469, 42.09726652147151],
    'zoom': 14.135947655906548,
    'bearing': -0.011496756350993564,
    'pitch': 0,
    'light': {
      'intensity': 0.25
    },
    'sources': {
      'composite': {
        'url': 'mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7',
        'type': 'vector'
      }
    },
    'sprite': 'mapbox://sprites/mapbox/cj7t3i5yj0unt2rmt3y4b5e32',
    'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    'layers': [{
      'id': 'background',
      'type': 'background',
      'layout': {},
      'paint': {
        'background-color': '#F7F5FA'
      }
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'maxzoom': 14,
      'filter': ['in', 'class', 'crop', 'grass', 'scrub', 'wood'],
      'type': 'fill',
      'source': 'composite',
      'id': 'landcover_foliage',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': 0.1,
        'fill-antialias': false
      },
      'source-layer': 'landcover'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'filter': ['==', 'class', 'national_park'],
      'type': 'fill',
      'source': 'composite',
      'id': 'national_park',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.5]
          ]
        },
        'fill-outline-color': '#F4E7F8'
      },
      'source-layer': 'landuse_overlay'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '1cfc175b0e7532a47eec44b8ede849d8'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'snow']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'landcover_snow',
      'paint': {
        'fill-color': '#fff',
        'fill-opacity': 0.1,
        'fill-antialias': false
      },
      'source-layer': 'landcover'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['==', 'class', 'industrial'],
      'type': 'fill',
      'source': 'composite',
      'id': 'industrial',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-outline-color': '#F4E7F8'
      },
      'source-layer': 'landuse'
    }, {
      'layout': {
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'school']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'schools',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': 1,
        'fill-outline-color': '#fff',
        'fill-antialias': true
      },
      'source-layer': 'landuse'
    }, {
      'layout': {
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'hospital']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'hospitals',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': 1,
        'fill-outline-color': '#fff',
        'fill-antialias': true
      },
      'source-layer': 'landuse'
    }, {
      'minzoom': 10,
      'layout': {},
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'cemetery']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'cemeteries',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.75]
          ]
        },
        'fill-outline-color': '#F4E7F8'
      },
      'source-layer': 'landuse'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['==', 'class', 'park'],
      'type': 'fill',
      'source': 'composite',
      'id': 'parks',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [5, 0],
            [6, 0.75]
          ]
        },
        'fill-outline-color': '#F4E7F8'
      },
      'source-layer': 'landuse'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['==', 'class', 'pitch'],
      'type': 'fill',
      'source': 'composite',
      'id': 'pitch',
      'paint': {
        'fill-color': '#F4E7F8',
        'fill-outline-color': '#F4E7F8'
      },
      'source-layer': 'landuse'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'filter': ['==', 'class', 'sand'],
      'type': 'fill',
      'source': 'composite',
      'id': 'sand',
      'paint': {
        'fill-color': '#fff'
      },
      'source-layer': 'landuse'
    }, {
      'id': 'water',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'a636a5194689e7c1dede11bf3cd8dcac'
      },
      'source': 'composite',
      'source-layer': 'water',
      'layout': {},
      'paint': {
        'fill-color': '#EDDBFB'
      }
    }, {
      'minzoom': 8,
      'layout': {
        'line-cap': {
          'base': 1,
          'stops': [
            [0, 'butt'],
            [11, 'round']
          ]
        },
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['any', ['==', 'class', 'canal'],
        ['==', 'class', 'river']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'waterway-river-canal',
      'paint': {
        'line-color': '#EDDBFB',
        'line-width': {
          'base': 1.3,
          'stops': [
            [8.5, 0.1],
            [20, 8]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [8, 0],
            [8.5, 1]
          ]
        }
      },
      'source-layer': 'waterway'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'land']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'barrier_line-land-polygon',
      'paint': {
        'fill-color': '#fff'
      },
      'source-layer': 'barrier_line'
    }, {
      'layout': {
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'land']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'barrier_line-land-line',
      'paint': {
        'line-width': {
          'base': 1.99,
          'stops': [
            [14, 0.75],
            [20, 40]
          ]
        },
        'line-color': '#fff'
      },
      'source-layer': 'barrier_line'
    }, {
      'minzoom': 11,
      'layout': {},
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['!=', 'type', 'apron'],
        ['==', '$type', 'Polygon']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'aeroway-polygon',
      'paint': {
        'fill-color': 'hsl(0, 0%, 100%)',
        'fill-opacity': {
          'base': 1,
          'stops': [
            [11, 0],
            [11.5, 1]
          ]
        },
        'fill-outline-color': '#fff'
      },
      'source-layer': 'aeroway'
    }, {
      'minzoom': 9,
      'layout': {},
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'type', 'runway']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'aeroway-runway',
      'paint': {
        'line-color': '#fff',
        'line-width': {
          'base': 1.5,
          'stops': [
            [9, 1],
            [18, 80]
          ]
        }
      },
      'source-layer': 'aeroway'
    }, {
      'minzoom': 9,
      'layout': {},
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'type', 'taxiway']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'aeroway-taxiway',
      'paint': {
        'line-color': '#fff',
        'line-width': {
          'base': 1.5,
          'stops': [
            [10, 0.5],
            [18, 20]
          ]
        }
      },
      'source-layer': 'aeroway'
    }, {
      'minzoom': 11,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '003e472752e5683c3f8ef9dee45b54a0'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'ferry']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'ferries',
      'paint': {
        'line-color': '#fff',
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.75],
            [20, 1]
          ]
        },
        'line-dasharray': {
          'base': 1,
          'stops': [
            [12, [2, 1]],
            [13, [12, 4]]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [11, 0.5],
            [14, 0.75]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 14,
      'layout': {
        'line-join': 'miter'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'construction']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-construction',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1,
          'stops': [
            [13.99, 0],
            [14, 1]
          ]
        },
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [0.4, 0.8]],
            [15, [0.3, 0.6]],
            [16, [0.2, 0.3]],
            [17, [0.2, 0.25]],
            [18, [0.15, 0.15]]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 16,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['in', 'type', 'crossing', 'sidewalk']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-sidewalks',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 4]
          ]
        },
        'line-color': '#fff',
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.75, 1]],
            [16, [1, 0.75]],
            [17, [1, 0.5]]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [16, 0],
            [16.25, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!in', 'type', 'crossing', 'sidewalk', 'steps'],
          ['==', 'class', 'path']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-path',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 4]
          ]
        },
        'line-color': '#fff',
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.75, 1]],
            [16, [1, 0.75]],
            [17, [1, 0.5]]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [14, 0],
            [14.25, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'type', 'steps']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-steps',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [15, 1],
            [18, 4]
          ]
        },
        'line-color': '#fff',
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.75, 1]],
            [16, [1, 0.75]],
            [17, [0.3, 0.3]]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [14, 0],
            [14.25, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 11,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['==', 'type', 'trunk_link'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-trunk_link',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': '#fff',
        'line-opacity': 1
      },
      'source-layer': 'road'
    }, {
      'minzoom': 10,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['==', 'class', 'motorway_link'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-motorway_link',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': '#fff',
        'line-opacity': 1
      },
      'source-layer': 'road'
    }, {
      'minzoom': 12,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'pedestrian']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-pedestrian',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': '#fff',
        'line-opacity': 1,
        'line-dasharray': {
          'base': 1,
          'stops': [
            [14, [1, 0]],
            [15, [1.5, 0.4]],
            [16, [1, 0.2]]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 14,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['!=', 'type', 'trunk_link'],
        ['in', 'class', 'link', 'service', 'track']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-service-link-track',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.5],
            [18, 12]
          ]
        },
        'line-color': '#fff'
      },
      'source-layer': 'road'
    }, {
      'minzoom': 11,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'street_limited']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-street_limited',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1,
          'stops': [
            [11, 0],
            [11.25, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 11,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'class', 'street']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-street',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [12.5, 0.5],
            [14, 2],
            [18, 18]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1,
          'stops': [
            [11, 0],
            [11.25, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['in', 'class', 'secondary', 'tertiary'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-secondary-tertiary',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [8.5, 0.5],
            [10, 0.75],
            [18, 26]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['==', 'class', 'primary'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-primary',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1.2,
          'stops': [
            [5, 0],
            [5.5, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 5,
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['==', 'class', 'trunk'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-trunk',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.5],
            [9, 1.4],
            [18, 32]
          ]
        },
        'line-color': '#fff',
        'line-opacity': 1
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['==', 'class', 'motorway'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-motorway',
      'paint': {
        'line-width': {
          'base': 1.5,
          'stops': [
            [5, 0.75],
            [18, 32]
          ]
        },
        'line-color': '#fff',
        'line-opacity': 1
      },
      'source-layer': 'road'
    }, {
      'minzoom': 13,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['in', 'class', 'major_rail', 'minor_rail'],
      'type': 'line',
      'source': 'composite',
      'id': 'road-rail',
      'paint': {
        'line-color': '#fff',
        'line-width': {
          'base': 1,
          'stops': [
            [14, 0.75],
            [20, 1]
          ]
        }
      },
      'source-layer': 'road'
    }, {
      'minzoom': 13,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '0cb8c63458cbe21bbe1ad66543f73a04'
      },
      'filter': ['all', ['==', 'type', 'subway'],
        ['in', 'class', 'major_rail', 'minor_rail']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road-subway',
      'paint': {
        'line-color': '#fff',
        'line-width': {
          'base': 1.5,
          'stops': [
            [14, 0.75],
            [20, 1]
          ]
        },
        'line-dasharray': [2, 1]
      },
      'source-layer': 'road'
    }, {
      'minzoom': 1,
      'layout': {
        'line-join': 'miter'
      },
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'filter': ['all', ['==', 'admin_level', 2],
        ['==', 'maritime', 0]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-2-boundaries-bg',
      'paint': {
        'line-width': {
          'base': 1,
          'stops': [
            [3, 3.5],
            [10, 10]
          ]
        },
        'line-color': '#fff',
        'line-opacity': {
          'base': 1,
          'stops': [
            [3, 0],
            [4, 0.5]
          ]
        },
        'line-translate': [0, 0],
        'line-blur': {
          'base': 1,
          'stops': [
            [3, 0],
            [10, 2]
          ]
        }
      },
      'source-layer': 'admin'
    }, {
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'filter': ['all', ['==', 'maritime', 0],
        ['>=', 'admin_level', 3]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-3-4-boundaries',
      'paint': {
        'line-dasharray': {
          'base': 1,
          'stops': [
            [6, [2, 0]],
            [7, [2, 2, 6, 2]]
          ]
        },
        'line-width': {
          'base': 1,
          'stops': [
            [7, 0.75],
            [12, 1.5]
          ]
        },
        'line-opacity': {
          'base': 1,
          'stops': [
            [2, 0],
            [3, 1]
          ]
        },
        'line-color': '#EDDBFB'
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 1,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'filter': ['all', ['==', 'admin_level', 2],
        ['==', 'disputed', 0],
        ['==', 'maritime', 0]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-2-boundaries',
      'paint': {
        'line-color': '#9469AE',
        'line-width': {
          'base': 1,
          'stops': [
            [3, 0.5],
            [10, 2]
          ]
        }
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 1,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': '4a585425cb0cc2af93b4cdedda86461d'
      },
      'filter': ['all', ['==', 'admin_level', 2],
        ['==', 'disputed', 1],
        ['==', 'maritime', 0]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-2-boundaries-dispute',
      'paint': {
        'line-dasharray': [1.5, 1.5],
        'line-color': {
          'base': 1,
          'stops': [
            [3, '#cbd3d4'],
            [4, '#DADFE6']
          ]
        },
        'line-width': {
          'base': 1,
          'stops': [
            [3, 0.5],
            [10, 2]
          ]
        }
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 12,
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'text-max-angle': 30,
        'text-size': {
          'base': 1,
          'stops': [
            [13, 12],
            [18, 16]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'filter': ['in', 'class', 'canal', 'river'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'waterway-label',
      'paint': {
        'text-halo-width': 0,
        'text-halo-blur': 0,
        'text-color': '#B18AC8'
      },
      'source-layer': 'waterway_label'
    }, {
      'minzoom': 5,
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Bariol Bold'],
        'text-max-width': 7,
        'text-size': {
          'base': 1,
          'stops': [
            [13, 13],
            [18, 18]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'filter': ['>', 'area', 10000],
      'type': 'symbol',
      'source': 'composite',
      'id': 'water-label',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'water_label'
    }, {
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1.5,
          'stops': [
            [10, 12],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Bariol Bold'],
        'text-padding': 2,
        'visibility': 'visible',
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'filter': ['<=', 'scalerank', 1],
      'type': 'symbol',
      'source': 'composite',
      'id': 'poi-scalerank1',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'poi_label'
    }, {
      'minzoom': 10,
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 12],
            [18, 18]
          ]
        },
        'symbol-spacing': 250,
        'text-font': ['Bariol Bold'],
        'text-padding': 2,
        'text-field': {
          'stops': [
            [11, '{ref}'],
            [14, '{name_en}']
          ]
        },
        'text-max-width': 9,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'filter': ['<=', 'scalerank', 2],
      'type': 'symbol',
      'source': 'composite',
      'id': 'airport-label',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 0.5,
        'text-halo-blur': 0
      },
      'source-layer': 'airport_label'
    }, {
      'minzoom': 11,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [14, 11],
            [20, 12]
          ]
        },
        'symbol-avoid-edges': false,
        'text-max-angle': 30,
        'symbol-spacing': 400,
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'metadata': {
        'mapbox:group': '87eb9fc4e65e33c3909d5992c53c8c22'
      },
      'filter': ['all', ['==', 'class', 'ferry'],
        ['in', '$type', 'LineString', 'Point']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'ferry-label',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1
      },
      'source-layer': 'road_label'
    }, {
      'minzoom': 15,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [15, 10],
            [20, 13]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 500,
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'filter': ['all', ['!in', 'class', '', 'ferry', 'link', 'motorway', 'path', 'pedestrian', 'primary', 'secondary', 'street', 'street_limited', 'tertiary', 'track', 'trunk'],
        ['==', '$type', 'LineString']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'road-label-small',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1.25,
        'text-halo-blur': 0
      },
      'source-layer': 'road_label'
    }, {
      'minzoom': 13,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [11, 11],
            [20, 16]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 500,
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['in', 'class', '', 'link', 'pedestrian', 'street', 'street_limited']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'road-label-medium',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'road_label'
    }, {
      'minzoom': 12,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [9, 10],
            [20, 19]
          ]
        },
        'text-max-angle': 30,
        'symbol-spacing': 400,
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'visibility': 'visible',
        'text-rotation-alignment': 'map',
        'text-field': '{name_en}'
      },
      'metadata': {
        'mapbox:group': '659790aba31107609c41007408bfdeeb'
      },
      'filter': ['in', 'class', 'motorway', 'primary', 'secondary', 'tertiary', 'trunk'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'road-label-large',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 2,
        'text-halo-blur': 0
      },
      'source-layer': 'road_label'
    }, {
      'layout': {
        'text-line-height': 1.2,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 11],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Bariol Bold'],
        'text-padding': 2,
        'visibility': 'visible',
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 8
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 16,
      'filter': ['in', 'type', 'aboriginal_lands', 'archipelago', 'islet'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-islets-archipelago-aboriginal',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 12,
      'layout': {
        'text-field': '{name_en}',
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.1,
        'text-max-width': 7,
        'text-font': ['Bariol Bold'],
        'text-padding': 3,
        'text-size': {
          'base': 1,
          'stops': [
            [12, 12],
            [16, 16]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 16,
      'filter': ['==', 'type', 'neighbourhood'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-neighbourhood',
      'paint': {
        'text-halo-color': '#fff',
        'text-halo-width': 3,
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 11,
      'layout': {
        'text-field': '{name_en}',
        'text-transform': 'uppercase',
        'text-font': ['Bariol Bold'],
        'text-letter-spacing': 0.1,
        'text-max-width': 7,
        'text-padding': 3,
        'text-size': {
          'base': 1,
          'stops': [
            [12, 12],
            [16, 16]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 16,
      'filter': ['==', 'type', 'suburb'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-suburb',
      'paint': {
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 10,
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [12, 11.5],
            [15, 16]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 16,
      'filter': ['==', 'type', 'hamlet'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-hamlet',
      'paint': {
        'text-halo-color': '#fff',
        'text-halo-width': 1.25,
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 11,
      'layout': {
        'text-field': '{name_en}',
        'text-font': ['Bariol Bold'],
        'text-max-width': 7,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 11.5],
            [16, 18]
          ]
        },
        'text-offset': [0, 0],
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 15,
      'filter': ['==', 'type', 'village'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-village',
      'paint': {
        'text-halo-color': '#fff',
        'text-halo-width': 1.25,
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 7,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [7, 12],
            [15, 16]
          ]
        },
        'text-font': ['Bariol Bold'],
        'text-padding': 2,
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 7,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 15,
      'filter': ['==', 'type', 'town'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-town',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1.25,
        'icon-opacity': {
          'base': 1,
          'stops': [
            [7.99, 1],
            [8, 0]
          ]
        },
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'layout': {
        'text-line-height': 1.2,
        'text-size': {
          'base': 1,
          'stops': [
            [10, 11],
            [18, 16]
          ]
        },
        'text-max-angle': 38,
        'symbol-spacing': 250,
        'text-font': ['Bariol Bold'],
        'text-padding': 2,
        'visibility': 'visible',
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 7
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 16,
      'filter': ['==', 'type', 'island'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-islands',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 2,
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [6, 12],
            [14, 22]
          ]
        },
        'text-font': ['Bariol Bold'],
        'text-offset': [0, 0],
        'text-field': '{name_en}',
        'text-max-width': 7,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 15,
      'filter': ['all', ['!in', 'scalerank', 0, 1, 2, 3, 4, 5],
        ['==', 'type', 'city']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-city-sm',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1.25,
        'icon-opacity': {
          'base': 1,
          'stops': [
            [7.99, 1],
            [8, 0]
          ]
        },
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'layout': {
        'text-size': {
          'base': 0.9,
          'stops': [
            [5, 12],
            [12, 22]
          ]
        },
        'text-font': ['Bariol Bold'],
        'text-anchor': 'bottom',
        'text-field': '{name_en}',
        'text-max-width': 7,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 15,
      'filter': ['all', ['==', 'type', 'city'],
        ['in', 'scalerank', 3, 4, 5]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-city-md',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'icon-opacity': {
          'base': 1,
          'stops': [
            [7.99, 1],
            [8, 0]
          ]
        },
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-size': {
          'base': 0.9,
          'stops': [
            [4, 12],
            [10, 20],
            [14, 26]
          ]
        },
        'text-font': ['Bariol Bold'],
        'icon-size': 1,
        'text-field': '{name_en}',
        'text-max-width': 7,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '0e4fe52bb6e07167e428ec66ad643fd7'
      },
      'maxzoom': 15,
      'filter': ['all', ['<=', 'scalerank', 2],
        ['==', 'type', 'city']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-city-lg',
      'paint': {
        'text-color': '#B18AC8',
        'text-opacity': 1,
        'text-halo-color': '#fff',
        'text-halo-width': 2,
        'icon-opacity': {
          'base': 1,
          'stops': [
            [7.99, 1],
            [8, 0]
          ]
        },
        'text-halo-blur': 0
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 3,
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1,
          'stops': [
            [3, 12],
            [6, 16]
          ]
        },
        'symbol-spacing': {
          'base': 1,
          'stops': [
            [4, 100],
            [6, 400]
          ]
        },
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'visibility': 'visible',
        'text-field': '{name_en}',
        'text-letter-spacing': 0.1,
        'text-max-width': 5
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 10,
      'filter': ['all', ['==', '$type', 'LineString'],
        ['>=', 'labelrank', 4]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-sm-ln',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 3,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 5,
        'text-letter-spacing': 0.1,
        'text-line-height': 1.5,
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [3, 12],
            [6, 16]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 10,
      'filter': ['all', ['==', '$type', 'Point'],
        ['>=', 'labelrank', 4]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-sm-pt',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 2,
      'layout': {
        'text-line-height': 1.1,
        'text-size': {
          'base': 1.1,
          'stops': [
            [2, 12],
            [5, 20]
          ]
        },
        'symbol-spacing': 250,
        'text-font': ['Bariol Bold'],
        'symbol-placement': 'line',
        'visibility': 'visible',
        'text-field': '{name_en}',
        'text-letter-spacing': 0.15,
        'text-max-width': 5
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 8,
      'filter': ['all', ['==', '$type', 'LineString'],
        ['in', 'labelrank', 2, 3]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-md-ln',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 2,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 5,
        'text-letter-spacing': 0.15,
        'text-line-height': 1.5,
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1.1,
          'stops': [
            [2, 14],
            [5, 20]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 8,
      'filter': ['all', ['==', '$type', 'Point'],
        ['in', 'labelrank', 2, 3]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-md-pt',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 4,
        'text-letter-spacing': 0.25,
        'text-line-height': 1.1,
        'symbol-placement': 'line',
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [1, 14],
            [4, 30]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 4,
      'filter': ['all', ['==', '$type', 'LineString'],
        ['==', 'labelrank', 1]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-lg-ln',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 4,
        'text-letter-spacing': 0.25,
        'text-line-height': 1.5,
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [1, 14],
            [4, 30]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': 'd84bd578f1389e89645c76070bd1c761'
      },
      'maxzoom': 4,
      'filter': ['all', ['==', '$type', 'Point'],
        ['==', 'labelrank', 1]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'marine-label-lg-pt',
      'paint': {
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'marine_label'
    }, {
      'minzoom': 3,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [6, 10],
            [9, 14]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Bariol Bold'],
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [6, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15,
        'text-max-width': 5,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 9,
      'filter': ['<', 'area', 20000],
      'type': 'symbol',
      'source': 'composite',
      'id': 'state-label-sm',
      'paint': {
        'text-opacity': 1,
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'state_label'
    }, {
      'minzoom': 3,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [5, 10],
            [8, 16]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Bariol Bold'],
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [5, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15,
        'text-max-width': 6,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 8,
      'filter': ['all', ['<', 'area', 80000],
        ['>=', 'area', 20000]
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'state-label-md',
      'paint': {
        'text-opacity': 1,
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'state_label'
    }, {
      'minzoom': 3,
      'layout': {
        'text-size': {
          'base': 1,
          'stops': [
            [4, 10],
            [7, 18]
          ]
        },
        'text-transform': 'uppercase',
        'text-font': ['Bariol Bold'],
        'text-padding': 1,
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{abbr}'],
            [4, '{name_en}']
          ]
        },
        'text-letter-spacing': 0.15,
        'text-max-width': 6,
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 7,
      'filter': ['>=', 'area', 80000],
      'type': 'symbol',
      'source': 'composite',
      'id': 'state-label-lg',
      'paint': {
        'text-opacity': 1,
        'text-color': '#B18AC8',
        'text-halo-color': '#fff',
        'text-halo-width': 1,
        'text-halo-blur': 0
      },
      'source-layer': 'state_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': 6,
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1.25,
          'stops': [
            [5, 14],
            [9, 22]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 10,
      'filter': ['>=', 'scalerank', 5],
      'type': 'symbol',
      'source': 'composite',
      'id': 'country-label-sm',
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': '#fff',
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'country_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': {
          'base': 1,
          'stops': [
            [0, '{code}'],
            [2, '{name_en}']
          ]
        },
        'text-max-width': 6,
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1.5,
          'stops': [
            [3, 12],
            [8, 24]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 8,
      'filter': ['in', 'scalerank', 3, 4],
      'type': 'symbol',
      'source': 'composite',
      'id': 'country-label-md',
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': '#fff',
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'country_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': '{name_en}',
        'text-max-width': {
          'base': 1,
          'stops': [
            [0, 5],
            [3, 6]
          ]
        },
        'text-font': ['Bariol Bold'],
        'text-size': {
          'base': 1,
          'stops': [
            [1, 10],
            [6, 24]
          ]
        },
        'visibility': 'visible'
      },
      'metadata': {
        'mapbox:group': '7d43494b5025022bf83d5e73f771a8c5'
      },
      'maxzoom': 7,
      'filter': ['in', 'scalerank', 1, 2],
      'type': 'symbol',
      'source': 'composite',
      'id': 'country-label-lg',
      'paint': {
        'text-halo-width': 1.25,
        'text-halo-color': '#fff',
        'text-color': '#B18AC8',
        'text-halo-blur': 0
      },
      'source-layer': 'country_label'
    }],
    'created': '2017-09-20T13:59:59.764Z',
    'id': 'cj7t3i5yj0unt2rmt3y4b5e32',
    'modified': '2017-09-26T19:14:05.560Z',
    'owner': 'mapbox',
    'visibility': 'public',
    'draft': false
  },
  'Minimo': {
    'version': 8,
    'postercolor': '#d3d7d9',
    'name': 'Minimo',
    'metadata': {
      'mapbox:origin': 'basic-template-v1',
      'mapbox:autocomposite': true,
      'mapbox:type': 'template',
      'mapbox:sdk-support': {
        'js': '0.46.0',
        'android': '6.0.0',
        'ios': '4.0.0'
      },
      'mapbox:trackposition': false,
      'mapbox:groups': {
        '1160790f5c2cfce6e16b98566fe80556': {
          'name': 'POI and Transit Labels',
          'collapsed': true
        },
        '1a437fbe7b67b45fe8edf393066a06be': {
          'name': 'Water Label',
          'collapsed': true
        },
        'eff3348ad17c3895e1cb4b1ee0050dac': {
          'name': 'Bridge',
          'collapsed': true
        },
        '955d6210c19b2bc4a81498e593cb0b01': {
          'name': 'Political and Place Label',
          'collapsed': true
        },
        'c00956cc0538f622e4e14b14b77fbec5': {
          'name': 'Land Cover and Use',
          'collapsed': true
        },
        'dc5de21f01dde83c2f15fb26dc9aa3a5': {
          'name': 'Admin Boundary',
          'collapsed': true
        },
        '5bb89653e4834131def144b696525795': {
          'name': 'Docks and Piers',
          'collapsed': true
        },
        'd5c60c5c38766d26365c7e897e1456d3': {
          'name': 'Hillshade',
          'collapsed': true
        },
        '6fe4ed93c99b75ab467510cc8cf75efc': {
          'name': 'Water',
          'collapsed': true
        },
        'fff75a972a195db98c14f1c539b7fc14': {
          'name': 'Building',
          'collapsed': true
        }
      }
    },
    'center': [6.149942, 46.207207],
    'zoom': 13,
    'bearing': 0,
    'pitch': 0,
    'sources': {
      'composite': {
        'url': 'mapbox://mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2',
        'type': 'vector'
      }
    },
    'sprite': 'mapbox://sprites/mapbox/cjku6bhmo15oz2rs8p2n9s2hm',
    'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    'layers': [{
      'id': 'background',
      'type': 'background',
      'layout': {},
      'paint': {
        'background-color': 'hsl(38, 0%, 100%)'
      }
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'c00956cc0538f622e4e14b14b77fbec5'
      },
      'filter': ['==', 'class', 'national_park'],
      'type': 'fill',
      'source': 'composite',
      'id': 'national_park-color',
      'paint': {
        'fill-color': '#f8f8f6',
        'fill-opacity': ['interpolate', ['linear'],
          ['zoom'], 5, 0, 6, 0.5
        ]
      },
      'source-layer': 'landuse_overlay'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'c00956cc0538f622e4e14b14b77fbec5'
      },
      'filter': ['==', 'class', 'national_park'],
      'type': 'fill',
      'source': 'composite',
      'id': 'national_park-pattern',
      'paint': {
        'fill-color': 'hsl(60, 12%, 97%)',
        'fill-opacity': ['interpolate', ['linear'],
          ['zoom'], 5, 0, 6, 0.4
        ],
        'fill-pattern': 'minimo-grey_pattern-park'
      },
      'source-layer': 'landuse_overlay'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'c00956cc0538f622e4e14b14b77fbec5'
      },
      'filter': ['in', 'class', 'hospital', 'park', 'pitch', 'school'],
      'type': 'fill',
      'source': 'composite',
      'id': 'landuse-color',
      'paint': {
        'fill-color': ['match', ['get', 'class'], 'park', '#f8f8f6', 'pitch', 'hsl(60, 12%, 97%)', 'hospital', '#f0f0f0', 'school', '#f0f0f0', 'hsla(0, 0%, 0%, 0)'],
        'fill-opacity': ['interpolate', ['linear'],
          ['zoom'], 5, 0, 6, 1
        ]
      },
      'source-layer': 'landuse'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'c00956cc0538f622e4e14b14b77fbec5'
      },
      'filter': ['in', 'class', 'cemetery', 'park'],
      'type': 'fill',
      'source': 'composite',
      'id': 'park-cemetery-pattern',
      'paint': {
        'fill-color': 'hsla(0, 0%, 0%, 0)',
        'fill-opacity': ['interpolate', ['linear'],
          ['zoom'], 5, 0, 6, 0.4
        ],
        'fill-pattern': 'minimo-grey_pattern-park'
      },
      'source-layer': 'landuse'
    }, {
      'minzoom': 8,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': '6fe4ed93c99b75ab467510cc8cf75efc'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['in', 'class', 'canal', 'river']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'waterway',
      'paint': {
        'line-color': '#d6dadc',
        'line-width': ['interpolate', ['exponential', 1.3],
          ['zoom'], 8.5, 0.1, 20, 8
        ],
        'line-opacity': ['interpolate', ['linear'],
          ['zoom'], 8, 0, 8.5, 1
        ]
      },
      'source-layer': 'waterway'
    }, {
      'id': 'water-color',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '6fe4ed93c99b75ab467510cc8cf75efc'
      },
      'source': 'composite',
      'source-layer': 'water',
      'layout': {},
      'paint': {
        'fill-color': '#d6dadc'
      }
    }, {
      'id': 'water-pattern',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '6fe4ed93c99b75ab467510cc8cf75efc'
      },
      'source': 'composite',
      'source-layer': 'water',
      'layout': {},
      'paint': {
        'fill-color': 'hsl(200, 8%, 85%)',
        'fill-pattern': 'minimo-grey_pattern-water',
        'fill-opacity': 0.24
      }
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '5bb89653e4834131def144b696525795'
      },
      'filter': ['==', 'class', 'land'],
      'type': 'line',
      'source': 'composite',
      'id': 'barrier-line',
      'paint': {
        'line-color': 'hsl(0, 0%, 100%)',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 13, 1, 18, 6
        ]
      },
      'source-layer': 'barrier_line'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': '5bb89653e4834131def144b696525795'
      },
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['==', 'class', 'land']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'barrier-polygon',
      'paint': {
        'fill-color': 'hsl(0, 0%, 100%)'
      },
      'source-layer': 'barrier_line'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 94],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_highlight_bright',
      'paint': {
        'fill-color': '#fff',
        'fill-opacity': {
          'stops': [
            [14, 0.08],
            [16, 0]
          ]
        },
        'fill-antialias': false
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 90],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_highlight_med',
      'paint': {
        'fill-color': '#fff',
        'fill-opacity': {
          'stops': [
            [14, 0.08],
            [16, 0]
          ]
        },
        'fill-antialias': false
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 89],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_shadow_faint',
      'paint': {
        'fill-color': 'hsl(0, 0%, 35%)',
        'fill-opacity': {
          'stops': [
            [14, 0.133],
            [16, 0]
          ]
        },
        'fill-antialias': false,
        'fill-pattern': 'minimo-grey_pattern-hillshade'
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 78],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_shadow_med',
      'paint': {
        'fill-color': 'hsl(0, 0%, 35%)',
        'fill-opacity': {
          'stops': [
            [14, 0.133],
            [16, 0]
          ]
        },
        'fill-antialias': false,
        'fill-pattern': 'minimo-grey_pattern-hillshade'
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 67],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_shadow_dark',
      'paint': {
        'fill-color': 'hsl(0, 0%, 35%)',
        'fill-opacity': {
          'stops': [
            [14, 0.16],
            [16, 0]
          ]
        },
        'fill-antialias': false,
        'fill-pattern': 'minimo-grey_pattern-hillshade'
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'metadata': {
        'mapbox:group': 'd5c60c5c38766d26365c7e897e1456d3'
      },
      'maxzoom': 16,
      'filter': ['==', 'level', 56],
      'type': 'fill',
      'source': 'composite',
      'id': 'hillshade_shadow_extreme',
      'paint': {
        'fill-color': 'hsl(0, 0%, 35%)',
        'fill-opacity': {
          'stops': [
            [14, 0.16],
            [16, 0]
          ]
        },
        'fill-antialias': false,
        'fill-pattern': 'minimo-grey_pattern-hillshade'
      },
      'source-layer': 'hillshade'
    }, {
      'layout': {},
      'filter': ['all', ['==', '$type', 'Polygon'],
        ['in', 'type', 'helipad', 'runway', 'taxiway']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'aeroway-polygon',
      'paint': {
        'fill-color': '#ededed'
      },
      'source-layer': 'aeroway'
    }, {
      'layout': {},
      'filter': ['all', ['==', '$type', 'LineString'],
        ['in', 'type', 'runway', 'taxiway']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'aeroway-line',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 10, 0.5, 18, 20
        ],
        'line-color': '#ededed'
      },
      'source-layer': 'aeroway'
    }, {
      'minzoom': 14,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!in', 'type', 'crossing', 'platform', 'sidewalk', 'steps'],
          ['in', 'class', 'path', 'pedestrian']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'pedestrian-path',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 12, 0.75, 14, 1, 18, 5
        ],
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 15.5, 'hsl(0, 0%, 80%)', 16, 'hsl(0, 0%, 90%)'
        ]
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-join': 'round'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!=', 'type', 'service:parking_aisle'],
          ['==', 'structure', 'tunnel'],
          ['in', 'class', 'link', 'motorway', 'motorway_link', 'primary', 'secondary', 'service', 'street', 'street_limited', 'tertiary', 'track', 'trunk']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'tunnel',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 5, ['match', ['get', 'class'], 'motorway', 0.5, 'trunk', 0.5, 'primary', 0.5, 'secondary', 0.5, 'tertiary', 0.5, 'street', 0, 'street_limited', 0, 'motorway_link', 0, 'service', 0, 'track', 0, 'link', 0, 0], 12, ['match', ['get', 'class'], 'motorway', 0.75, 'trunk', 0.75, 'primary', 0.75, 'secondary', 0.75, 'tertiary', 0.75, 'street', 0.75, 'street_limited', 0.75, 'motorway_link', 0.75, 'service', 0, 'track', 0, 'link', 0, 0], 14, ['match', ['get', 'class'], 'motorway', 1, 'trunk', 1, 'primary', 1, 'secondary', 1, 'tertiary', 1, 'street', 1, 'street_limited', 1, 'motorway_link', 1, 'service', 1, 'track', 1, 'link', 1, 1], 18, ['match', ['get', 'class'], 'motorway', 5, 'trunk', 5, 'primary', 5, 'secondary', 5, 'tertiary', 5, 'street', 5, 'street_limited', 5, 'motorway_link', 5, 'service', 5, 'track', 5, 'link', 5, 5]
        ],
        'line-color': ['match', ['get', 'class'], 'street', '#e6e6e6', 'street_limited', '#e6e6e6', 'service', '#e6e6e6', 'track', '#e6e6e6', 'link', '#e6e6e6', '#e6e6e6'],
        'line-dasharray': [0.2, 0.2]
      },
      'source-layer': 'road'
    }, {
      'minzoom': 11,
      'layout': {},
      'filter': ['all', ['!=', 'structure', 'tunnel'],
        ['!=', 'type', 'subway'],
        ['==', 'class', 'major_rail']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'rail',
      'paint': {
        'line-color': '#d4d4b5',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 5, 0.5, 12, 0.75, 14, 1, 18, 2
        ]
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!=', 'type', 'service:parking_aisle'],
          ['!in', 'structure', 'bridge', 'tunnel'],
          ['in', 'class', 'link', 'motorway', 'motorway_link', 'primary', 'secondary', 'service', 'street', 'street_limited', 'tertiary', 'track', 'trunk']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'road',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 5, ['match', ['get', 'class'], 'motorway', 0.5, 'trunk', 0.5, 'primary', 0.5, 'secondary', 0.5, 'tertiary', 0.5, 'street', 0, 'street_limited', 0, 'motorway_link', 0, 'service', 0, 'track', 0, 'link', 0, 0], 12, ['match', ['get', 'class'], 'motorway', 0.75, 'trunk', 0.75, 'primary', 0.75, 'secondary', 0.75, 'tertiary', 0.75, 'street', 0.75, 'street_limited', 0.75, 'motorway_link', 0.75, 'service', 0, 'track', 0, 'link', 0, 0], 14, ['match', ['get', 'class'], 'motorway', 1, 'trunk', 1, 'primary', 1, 'secondary', 1, 'tertiary', 1, 'street', 1, 'street_limited', 1, 'motorway_link', 1, 'service', 1, 'track', 1, 'link', 1, 1], 18, ['match', ['get', 'class'], 'motorway', 5, 'trunk', 5, 'primary', 5, 'secondary', 5, 'tertiary', 5, 'street', 5, 'street_limited', 5, 'motorway_link', 5, 'service', 5, 'track', 5, 'link', 5, 5]
        ],
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 15.5, '#cccccc', 16, 'hsl(0, 0%, 90%)'
        ]
      },
      'source-layer': 'road'
    }, {
      'minzoom': 15,
      'layout': {},
      'metadata': {
        'mapbox:group': 'fff75a972a195db98c14f1c539b7fc14'
      },
      'filter': ['all', ['!=', 'type', 'building:part'],
        ['==', 'underground', 'false']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'building-outline',
      'paint': {
        'line-color': 'hsl(0, 0%, 80%)',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 16, 2.75, 22, 6
        ],
        'line-opacity': ['step', ['zoom'], 0, 15.9, 0, 16, 1]
      },
      'source-layer': 'building'
    }, {
      'minzoom': 15,
      'layout': {},
      'metadata': {
        'mapbox:group': 'fff75a972a195db98c14f1c539b7fc14'
      },
      'filter': ['all', ['!=', 'type', 'building:part'],
        ['==', 'underground', 'false']
      ],
      'type': 'fill',
      'source': 'composite',
      'id': 'building-pattern',
      'paint': {
        'fill-color': 'hsl(38, 0%, 80%)',
        'fill-opacity': ['step', ['zoom'], 0, 15.5, 0, 16, 1],
        'fill-outline-color': 'hsla(0, 0%, 100%, 0)',
        'fill-pattern': 'minimo-grey_pattern-building'
      },
      'source-layer': 'building'
    }, {
      'minzoom': 15,
      'layout': {},
      'metadata': {
        'mapbox:group': 'fff75a972a195db98c14f1c539b7fc14'
      },
      'filter': ['all', ['!=', 'type', 'building:part'],
        ['==', 'underground', 'false']
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'building-top-line',
      'paint': {
        'line-color': 'hsl(0, 0%, 80%)',
        'line-width': 0.4,
        'line-opacity': ['step', ['zoom'], 0, 15.5, 0, 16, 1]
      },
      'source-layer': 'building'
    }, {
      'layout': {
        'line-join': 'round'
      },
      'filter': ['==', 'class', 'ferry'],
      'type': 'line',
      'source': 'composite',
      'id': 'ferry',
      'paint': {
        'line-color': 'hsl(208, 18%, 69%)',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 5, 0.5, 12, 0.5, 18, 2
        ]
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'symbol-spacing': 800,
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-font': ['Playfair Display SC Italic', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 13, 9, 18, 14
        ],
        'symbol-placement': 'line',
        'text-letter-spacing': 0.5
      },
      'metadata': {
        'mapbox:group': '1a437fbe7b67b45fe8edf393066a06be'
      },
      'filter': ['in', '$type', 'LineString', 'Point', 'Polygon'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'waterway-label',
      'paint': {
        'text-color': '#39688e'
      },
      'source-layer': 'waterway_label'
    }, {
      'id': 'water-label',
      'type': 'symbol',
      'metadata': {
        'mapbox:group': '1a437fbe7b67b45fe8edf393066a06be'
      },
      'source': 'composite',
      'source-layer': 'water_label',
      'layout': {
        'text-letter-spacing': 0.25,
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-font': ['Playfair Display SC Italic', 'Arial Unicode MS Regular'],
        'text-size': 12
      },
      'paint': {
        'text-color': '#5b86a9',
        'text-halo-width': 0
      }
    }, {
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': 'eff3348ad17c3895e1cb4b1ee0050dac'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!=', 'type', 'service:parking_aisle'],
          ['==', 'structure', 'bridge'],
          ['in', 'class', 'link', 'motorway', 'motorway_link', 'primary', 'secondary', 'service', 'street', 'street_limited', 'tertiary', 'track', 'trunk']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'bridge-case',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 10, 1, 16, 2
        ],
        'line-color': 'hsl(38, 0%, 100%)',
        'line-gap-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 5, ['match', ['get', 'class'], 'motorway', 0.5, 'trunk', 0.5, 'primary', 0.5, 'secondary', 0.5, 'tertiary', 0.5, 'street', 0, 'street_limited', 0, 'motorway_link', 0, 'service', 0, 'track', 0, 'link', 0, 0], 12, ['match', ['get', 'class'], 'motorway', 0.75, 'trunk', 0.75, 'primary', 0.75, 'secondary', 0.75, 'tertiary', 0.75, 'street', 0.75, 'street_limited', 0.75, 'motorway_link', 0.75, 'service', 0, 'track', 0, 'link', 0, 0], 14, ['match', ['get', 'class'], 'motorway', 1, 'trunk', 1, 'primary', 1, 'secondary', 1, 'tertiary', 1, 'street', 1, 'street_limited', 1, 'motorway_link', 1, 'service', 1, 'track', 1, 'link', 1, 1], 18, ['match', ['get', 'class'], 'motorway', 7, 'trunk', 7, 'primary', 7, 'secondary', 7, 'tertiary', 7, 'street', 7, 'street_limited', 7, 'motorway_link', 7, 'service', 7, 'track', 7, 'link', 7, 7]
        ]
      },
      'source-layer': 'road'
    }, {
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': 'eff3348ad17c3895e1cb4b1ee0050dac'
      },
      'filter': ['all', ['==', '$type', 'LineString'],
        ['all', ['!=', 'type', 'service:parking_aisle'],
          ['==', 'structure', 'bridge'],
          ['in', 'class', 'link', 'motorway', 'motorway_link', 'primary', 'secondary', 'service', 'street', 'street_limited', 'tertiary', 'track', 'trunk']
        ]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'bridge',
      'paint': {
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 5, ['match', ['get', 'class'], 'motorway', 0.5, 'trunk', 0.5, 'primary', 0.5, 'secondary', 0.5, 'tertiary', 0.5, 'street', 0, 'street_limited', 0, 'motorway_link', 0, 'service', 0, 'track', 0, 'link', 0, 0], 12, ['match', ['get', 'class'], 'motorway', 0.75, 'trunk', 0.75, 'primary', 0.75, 'secondary', 0.75, 'tertiary', 0.75, 'street', 0.75, 'street_limited', 0.75, 'motorway_link', 0.75, 'service', 0, 'track', 0, 'link', 0, 0], 14, ['match', ['get', 'class'], 'motorway', 1, 'trunk', 1, 'primary', 1, 'secondary', 1, 'tertiary', 1, 'street', 1, 'street_limited', 1, 'motorway_link', 1, 'service', 1, 'track', 1, 'link', 1, 1], 18, ['match', ['get', 'class'], 'motorway', 5, 'trunk', 5, 'primary', 5, 'secondary', 5, 'tertiary', 5, 'street', 5, 'street_limited', 5, 'motorway_link', 5, 'service', 5, 'track', 5, 'link', 5, 5]
        ],
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 15.5, '#cccccc', 16, 'hsl(0, 0%, 90%)'
        ]
      },
      'source-layer': 'road'
    }, {
      'minzoom': 2,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': 'dc5de21f01dde83c2f15fb26dc9aa3a5'
      },
      'filter': ['all', ['==', 'maritime', 0],
        ['>=', 'admin_level', 3]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-state-province',
      'paint': {
        'line-dasharray': ['step', ['zoom'],
          ['literal', [2, 0]], 7, ['literal', [2, 2, 6, 2]]
        ],
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 7, 0.75, 12, 1.5
        ],
        'line-opacity': ['interpolate', ['linear'],
          ['zoom'], 2, 0, 3, 1
        ],
        'line-color': ['step', ['zoom'], 'hsl(0, 0%, 80%)', 4, 'hsl(0, 0%, 65%)']
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 1,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'metadata': {
        'mapbox:group': 'dc5de21f01dde83c2f15fb26dc9aa3a5'
      },
      'filter': ['all', ['<=', 'admin_level', 2],
        ['==', 'disputed', 0],
        ['==', 'maritime', 0]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-country',
      'paint': {
        'line-color': '#808080',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 3, 0.5, 10, 2
        ]
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 1,
      'layout': {
        'line-join': 'round'
      },
      'metadata': {
        'mapbox:group': 'dc5de21f01dde83c2f15fb26dc9aa3a5'
      },
      'filter': ['all', ['<=', 'admin_level', 2],
        ['==', 'disputed', 1],
        ['==', 'maritime', 0]
      ],
      'type': 'line',
      'source': 'composite',
      'id': 'admin-country-disputed',
      'paint': {
        'line-color': 'hsl(0, 0%, 50%)',
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 3, 0.5, 10, 2
        ],
        'line-dasharray': [1.5, 1.5]
      },
      'source-layer': 'admin'
    }, {
      'minzoom': 12,
      'layout': {
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 9, ['match', ['get', 'class'], 'motorway', 10, 'trunk', 10, 'primary', 10, 'secondary', 10, 'tertiary', 10, 9], 20, ['match', ['get', 'class'], 'motorway', 15, 'trunk', 15, 'primary', 15, 'secondary', 15, 'tertiary', 15, 14]
        ],
        'text-max-angle': 30,
        'text-transform': 'uppercase',
        'text-font': ['DIN Offc Pro Cond', 'Arial Unicode MS Regular'],
        'symbol-placement': 'line',
        'text-padding': 1,
        'text-rotation-alignment': 'map',
        'text-pitch-alignment': 'viewport',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.1
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['in', 'class', 'link', 'motorway', 'pedestrian', 'primary', 'secondary', 'street', 'street_limited', 'tertiary', 'trunk'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'road-label',
      'paint': {
        'text-color': '#333333',
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1
      },
      'source-layer': 'road_label'
    }, {
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'symbol-placement': 'line',
        'text-font': ['DIN Offc Pro Cond', 'Arial Unicode MS Regular'],
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 9, ['match', ['get', 'class'], 'motorway', 10, 'trunk', 10, 'primary', 10, 'secondary', 10, 'tertiary', 10, 9], 20, ['match', ['get', 'class'], 'motorway', 15, 'trunk', 15, 'primary', 15, 'secondary', 15, 'tertiary', 15, 14]
        ],
        'text-letter-spacing': 0.1,
        'text-transform': 'uppercase'
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['==', 'class', 'ferry'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'ferry-line-label',
      'paint': {
        'text-color': '#1b4d79',
        'text-halo-color': 'hsla(0, 0%, 100%, 0.6)',
        'text-halo-width': 1
      },
      'source-layer': 'road_label'
    }, {
      'layout': {
        'text-line-height': 1.1,
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 10, 10, 18, 12
        ],
        'icon-offset': [0, -2],
        'icon-image': 'ferry-15',
        'text-max-angle': 38,
        'text-font': ['Roboto Regular', 'Arial Unicode MS Regular'],
        'text-padding': 2,
        'text-offset': [0, 0.75],
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.05,
        'text-max-width': 8
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['==', 'maki', 'ferry'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'ferry-station-label',
      'paint': {
        'text-color': '#1b4d79',
        'text-halo-color': 'hsla(0, 0%, 100%, 0.75)',
        'text-halo-width': 1,
        'text-halo-blur': 0.5
      },
      'source-layer': 'poi_label'
    }, {
      'layout': {
        'text-line-height': 1.1,
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 10, 10, 18, 12
        ],
        'icon-image': ['match', ['get', 'scalerank'], 1, 'minimo-grey_poi-1', 2, 'minimo-grey_poi-2', 3, 'minimo-grey_poi-3', ''],
        'text-max-angle': 38,
        'text-font': ['Roboto Regular', 'Arial Unicode MS Regular'],
        'text-padding': 2,
        'text-offset': [0, 0.75],
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.05,
        'text-max-width': 8
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['<=', 'scalerank', 3],
      'type': 'symbol',
      'source': 'composite',
      'id': 'poi-label',
      'paint': {
        'text-color': 'hsl(0, 0%, 20%)',
        'text-halo-color': 'hsla(0, 0%, 100%, 0.75)',
        'text-halo-width': 1,
        'text-halo-blur': 0.5
      },
      'source-layer': 'poi_label'
    }, {
      'layout': {
        'text-line-height': 1.1,
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 10, 10, 18, 12
        ],
        'icon-offset': [0, -10],
        'icon-image': ['match', ['get', 'network'], 'rail', 'rail-15', 'rail-light-15'],
        'text-font': ['Roboto Regular', 'Arial Unicode MS Regular'],
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.05,
        'text-max-width': 8
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['!=', 'maki', 'entrance'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'rail-station-label',
      'paint': {
        'text-color': ['match', ['get', 'network'], 'rail', '#8c8c4f', 'hsl(0, 0%, 20%)'],
        'text-halo-color': 'hsla(0, 0%, 100%, 0.75)',
        'text-halo-width': 1,
        'text-halo-blur': 0.5
      },
      'source-layer': 'rail_station_label'
    }, {
      'layout': {
        'text-line-height': 1.1,
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 10, 12, 18, 18
        ],
        'icon-image': ['step', ['zoom'],
          ['concat', ['get', 'maki'], '-11'], 13, ['concat', ['get', 'maki'], '-15']
        ],
        'text-font': ['Roboto Regular', 'Arial Unicode MS Regular'],
        'text-padding': 2,
        'text-offset': [0, 0.75],
        'text-anchor': 'top',
        'text-field': ['step', ['zoom'],
          ['get', 'ref'], 14, ['coalesce', ['get', 'name_en'],
            ['get', 'name']
          ]
        ],
        'text-max-width': 9
      },
      'metadata': {
        'mapbox:group': '1160790f5c2cfce6e16b98566fe80556'
      },
      'filter': ['<=', 'scalerank', 2],
      'type': 'symbol',
      'source': 'composite',
      'id': 'airport-label',
      'paint': {
        'text-color': 'hsl(38, 0%, 57%)',
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1
      },
      'source-layer': 'airport_label'
    }, {
      'minzoom': 12,
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.25,
        'text-max-width': 8,
        'text-font': ['Roboto Mono Light Italic', 'Arial Unicode MS Regular'],
        'text-padding': 3,
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 12, 11, 16, 16
        ]
      },
      'metadata': {
        'mapbox:group': '955d6210c19b2bc4a81498e593cb0b01'
      },
      'maxzoom': 15,
      'filter': ['in', 'type', 'neighbourhood', 'suburb'],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-neighborhood-suburb-label',
      'paint': {
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1,
        'text-color': '#333333'
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 6,
      'layout': {
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 5, ['match', ['get', 'type'], 'town', 9.5, 8], 16, ['match', ['get', 'type'], 'town', 20, 16]
        ],
        'icon-offset': [0, -9],
        'icon-image': ['case', ['<=', ['number', ['get', 'localrank']], 7], 'minimo-grey_place-5', ''],
        'text-transform': 'uppercase',
        'text-font': ['step', ['zoom'],
          ['literal', ['Roboto Mono Light', 'Arial Unicode MS Regular']], 12, ['match', ['get', 'type'], 'town', ['literal', ['Roboto Mono Regular', 'Arial Unicode MS Regular']],
            ['literal', ['Roboto Mono Light', 'Arial Unicode MS Regular']]
          ]
        ],
        'text-offset': [0, 0],
        'icon-size': 1,
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.05,
        'text-max-width': 7
      },
      'metadata': {
        'mapbox:group': '955d6210c19b2bc4a81498e593cb0b01'
      },
      'maxzoom': 14,
      'filter': ['all', ['<=', 'localrank', 20],
        ['in', 'type', 'hamlet', 'town', 'village']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-town-village-hamlet-label',
      'paint': {
        'text-color': '#4d4d4d',
        'text-halo-blur': 0.5,
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1,
        'icon-opacity': ['step', ['zoom'], 0, 6, 0, 7, 1]
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 5, 12, 16, 22
        ],
        'icon-offset': [0, -8],
        'icon-image': 'minimo-grey_place-4',
        'text-transform': 'uppercase',
        'text-font': ['literal', ['Roboto Mono Light', 'Arial Unicode MS Regular']],
        'icon-size': 1,
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.1,
        'text-max-width': 10
      },
      'metadata': {
        'mapbox:group': '955d6210c19b2bc4a81498e593cb0b01'
      },
      'maxzoom': 14,
      'filter': ['all', ['!has', 'scalerank'],
        ['==', 'type', 'city']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-city-label-minor',
      'paint': {
        'text-color': 'hsl(38, 0%, 30%)',
        'text-halo-blur': 0.5,
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1.25,
        'icon-translate': [0, 0],
        'icon-opacity': 1
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 4,
      'layout': {
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 5, ['step', ['get', 'scalerank'], 14, 4, 12], 16, ['step', ['get', 'scalerank'], 30, 4, 22]
        ],
        'icon-offset': ['match', ['get', 'scalerank'], 0, ['literal', [0, -12]], 1, ['literal', [0, -12]], 2, ['literal', [0, -12]], 3, ['literal', [0, -12]], 4, ['literal', [0, -7]], 5, ['literal', [0, -7]], 6, ['literal', [0, -7]], 7, ['literal', [0, -7]],
          ['literal', [0, -10]]
        ],
        'icon-image': ['step', ['zoom'], '', 5, ['step', ['get', 'scalerank'], 'minimo-grey_place-1', 4, 'minimo-grey_place-2', 8, 'minimo-grey_place-3']],
        'text-transform': 'uppercase',
        'text-font': ['step', ['zoom'],
          ['literal', ['Roboto Mono Regular', 'Arial Unicode MS Regular']], 10, ['step', ['get', 'scalerank'],
            ['literal', ['Roboto Mono Medium', 'Arial Unicode MS Bold']], 5, ['literal', ['Roboto Mono Regular', 'Arial Unicode MS Regular']]
          ]
        ],
        'text-anchor': 'top',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-letter-spacing': 0.1,
        'text-max-width': 10
      },
      'metadata': {
        'mapbox:group': '955d6210c19b2bc4a81498e593cb0b01'
      },
      'maxzoom': 14,
      'filter': ['all', ['==', 'type', 'city'],
        ['has', 'scalerank']
      ],
      'type': 'symbol',
      'source': 'composite',
      'id': 'place-city-label-major',
      'paint': {
        'text-color': '#4d4d4d',
        'text-halo-blur': 0.5,
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-halo-width': 1.25,
        'icon-translate': ['literal', [0, 0]],
        'icon-opacity': ['step', ['zoom'], 0, 5, ['match', ['get', 'scalerank'], 0, 1, 1, 1, 2, 1, 3, 1, 0], 6, 1]
      },
      'source-layer': 'place_label'
    }, {
      'minzoom': 1,
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-max-width': ['interpolate', ['linear'],
          ['zoom'], 0, 8, 3, 8
        ],
        'text-font': ['literal', ['Roboto Mono Light Italic', 'Arial Unicode MS Regular']],
        'text-size': ['interpolate', ['linear'],
          ['zoom'], 2, ['step', ['get', 'scalerank'], 12, 3, 10, 5, 8], 9, ['step', ['get', 'scalerank'], 32, 3, 24, 5, 19]
        ],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.2
      },
      'metadata': {
        'mapbox:group': '955d6210c19b2bc4a81498e593cb0b01'
      },
      'maxzoom': 8,
      'type': 'symbol',
      'source': 'composite',
      'id': 'country-label',
      'paint': {
        'text-halo-width': 0.75,
        'text-halo-color': 'hsl(0, 0%, 100%)',
        'text-color': '#2b2b2b'
      },
      'source-layer': 'country_label'
    }],
    'created': '2018-08-14T20:42:43.953Z',
    'id': 'cjku6bhmo15oz2rs8p2n9s2hm',
    'modified': '2018-08-14T21:01:02.014Z',
    'owner': 'mapbox',
    'visibility': 'public',
    'draft': false
  },
  'Mineral': {
    'version': 8,
    'postercolor': '#bcc2b6',
    'name': 'Mineral',
    'metadata': {
      'mapbox:autocomposite': true,
      'mapbox:type': 'template',
      'mapbox:sdk-support': {
        'js': '0.50.0',
        'android': '6.7.0',
        'ios': '4.6.0'
      },
      'mapbox:groups': {
        '7cd60a45a077e965776330d738d6d85d': {
          'name': 'Landuse',
          'collapsed': true
        },
        'ebad397fb9a368056b2b3ac67fbcbba4': {
          'name': 'Bathymetry',
          'collapsed': true
        }
      }
    },
    'center': [163.7721530314534, -19.92437751092946],
    'zoom': 0.9477677237161303,
    'bearing': 0,
    'pitch': 0,
    'sources': {
      'composite': {
        'url': 'mapbox://mapbox.0us8t516,mapbox.8j5f01yf,mapbox.c18nopub,mapbox.mapbox-streets-v8,mapbox.ccz72v66,mapbox.82scr8yk,mapbox.137e7iza,mapbox.mapbox-terrain-v2,mapbox.25xhlmby',
        'type': 'vector'
      }
    },
    'sprite': 'mapbox://sprites/mapbox/cjtep62gq54l21frr1whf27ak',
    'glyphs': 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    'layers': [{
      'id': 'background',
      'type': 'background',
      'layout': {},
      'paint': {
        'background-color': '#eadcc2'
      }
    }, {
      'id': 'water',
      'type': 'fill',
      'source': 'composite',
      'source-layer': 'water',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.4)'
      }
    }, {
      'id': 'bathymetry-10m-200-2u6rh1',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_200-2u6rh1',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.5)'
      }
    }, {
      'id': 'bathymetry-10m-2000-5i8frv',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_2000-5i8frv',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.6)'
      }
    }, {
      'id': 'bathymetry-10m-3000-93d4x4',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_3000-93d4x4',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.7)'
      }
    }, {
      'id': 'bathymetry-10m-4000-4agrn4',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_4000-4agrn4',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.8)'
      }
    }, {
      'id': 'bathymetry-10m-5000-2oopvl',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_5000-2oopvl',
      'layout': {},
      'paint': {
        'fill-color': 'hsla(189, 20%, 55%, 0.9)'
      }
    }, {
      'id': 'bathymetry-10m-6000-0olg6d',
      'type': 'fill',
      'metadata': {
        'mapbox:group': 'ebad397fb9a368056b2b3ac67fbcbba4'
      },
      'source': 'composite',
      'source-layer': 'bathymetry_10m_6000-0olg6d',
      'layout': {},
      'paint': {
        'fill-color': 'hsl(189, 20%, 55%)'
      }
    }, {
      'id': 'ferry',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'road',
      'filter': ['match', ['get', 'class'],
        ['ferry'], true, false
      ],
      'layout': {},
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 0, 'hsla(0, 0%, 100%, 0.75)', 8, 'hsla(0, 0%, 100%, 0)', 10, 'hsla(0, 0%, 100%, 0.8)'
        ],
        'line-dasharray': ['step', ['zoom'],
          ['literal', [10, 5]], 13, ['literal', [12, 4]]
        ]
      },
      'metadata': {}
    }, {
      'id': 'landcover - grass',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '7cd60a45a077e965776330d738d6d85d'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'filter': ['match', ['get', 'class'],
        ['grass'], true, false
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(66, 34%, 61%)'
      }
    }, {
      'id': 'landcover - scrub',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '7cd60a45a077e965776330d738d6d85d'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'filter': ['match', ['get', 'class'],
        ['scrub'], true, false
      ],
      'layout': {},
      'paint': {
        'fill-color': '#528984'
      }
    }, {
      'id': 'landuse - grass',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '7cd60a45a077e965776330d738d6d85d'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'filter': ['match', ['get', 'class'],
        ['agriculture', 'grass', 'aboriginal_lands'], true, false
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(175, 25%, 43%)'
      }
    }, {
      'id': 'landuse - wood',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '7cd60a45a077e965776330d738d6d85d'
      },
      'source': 'composite',
      'source-layer': 'landuse',
      'filter': ['match', ['get', 'class'],
        ['wood'], true, false
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(39, 22%, 23%)'
      }
    }, {
      'id': 'landcover - wood',
      'type': 'fill',
      'metadata': {
        'mapbox:group': '7cd60a45a077e965776330d738d6d85d'
      },
      'source': 'composite',
      'source-layer': 'landcover',
      'filter': ['match', ['get', 'class'],
        ['wood'], true, false
      ],
      'layout': {},
      'paint': {
        'fill-color': 'hsl(39, 22%, 23%)'
      }
    }, {
      'id': 'tunnel',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'road',
      'filter': ['all', ['==', ['geometry-type'], 'LineString'],
        ['!=', ['get', 'type'], 'service:parking_aisle'],
        ['==', ['get', 'structure'], 'tunnel'],
        ['match', ['get', 'class'],
          ['motorway', 'motorway_link', 'trunk', 'trunk_link', 'primary', 'primary_link', 'secondary', 'secondary_link', 'tertiary', 'tertiary_link', 'street', 'street_limited', 'service', 'track'], true, false
        ]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 8, ['match', ['get', 'class'],
            ['street', 'street_limited', 'service', 'track', 'secondary_link', 'tertiary_link', 'primary_link', 'trunk_link'], 'hsla(0, 0%, 40%, 0)', 'hsla(0, 0%, 40%, 0)'
          ], 15, ['match', ['get', 'class'],
            ['street', 'street_limited', 'service', 'track', 'secondary_link', 'tertiary_link', 'primary_link', 'trunk_link'], '#666666', '#666666'
          ]
        ],
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 13, 1, 15, 0.25
        ]
      }
    }, {
      'id': 'building fill',
      'type': 'fill',
      'source': 'composite',
      'source-layer': 'building',
      'layout': {},
      'paint': {
        'fill-color': '#eadcc2'
      }
    }, {
      'id': 'building',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'building',
      'layout': {},
      'paint': {
        'line-width': 1.5,
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 15, 'hsla(0, 0%, 0%, 0)', 17, 'hsl(0, 0%, 0%)'
        ]
      }
    }, {
      'id': 'rail-tracks',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'road',
      'filter': ['all', ['match', ['get', 'class'],
        ['major_rail', 'minor_rail'], true, false
      ],
      ['match', ['get', 'structure'],
        ['none', 'ford', 'bridge'], true, false
      ]
      ],
      'layout': {
        'line-join': 'round'
      },
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 13, 'hsla(0, 0%, 40%, 0.25)', 16, '#666666'
        ],
        'line-dasharray': [0.1, 15],
        'line-width': ['interpolate', ['exponential', 1.5],
          ['zoom'], 14, 4, 20, 8
        ]
      }
    }, {
      'id': 'rail',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'road',
      'filter': ['all', ['match', ['get', 'class'],
        ['major_rail', 'minor_rail'], true, false
      ],
      ['match', ['get', 'structure'],
        ['none', 'ford', 'bridge'], true, false
      ]
      ],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 13, 'hsl(50, 17%, 82%)', 16, 'hsl(230, 10%, 74%)'
        ],
        'line-width': 0.5
      }
    }, {
      'id': 'road',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'road',
      'filter': ['all', ['==', ['geometry-type'], 'LineString'],
        ['!=', ['get', 'type'], 'service:parking_aisle'],
        ['match', ['get', 'structure'],
          ['tunnel'], false, true
        ],
        ['match', ['get', 'class'],
          ['motorway', 'motorway_link', 'trunk', 'trunk_link', 'primary', 'primary_link', 'secondary', 'secondary_link', 'tertiary', 'tertiary_link', 'street'], true, false
        ]
      ],
      'layout': {
        'line-cap': 'round',
        'line-join': 'round'
      },
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 8, ['match', ['get', 'class'],
            ['street', 'street_limited', 'service', 'track', 'secondary_link', 'tertiary_link', 'primary_link', 'trunk_link'], 'hsla(0, 0%, 40%, 0)', 'hsla(0, 0%, 40%, 0)'
          ], 15, ['match', ['get', 'class'],
            ['street', 'street_limited', 'service', 'track', 'secondary_link', 'tertiary_link', 'primary_link', 'trunk_link'], '#666666', '#666666'
          ]
        ],
        'line-width': ['interpolate', ['linear'],
          ['zoom'], 13, 1, 15, 0.25
        ]
      }
    }, {
      'id': 'railroads-yellow',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'ne_10m_railroads-d3zbla',
      'filter': ['match', ['get', 'scalerank'],
        [0, 4, 5, 6, 7], true, false
      ],
      'layout': {},
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 0, 'hsla(46, 80%, 67%, 0)', 3, 'hsla(46, 80%, 67%, 0)', 4, '#eecf68'
        ],
        'line-dasharray': [2, 1],
        'line-offset': 10,
        'line-width': 2
      }
    }, {
      'id': 'railroads-black',
      'type': 'line',
      'source': 'composite',
      'source-layer': 'ne_10m_railroads-d3zbla',
      'filter': ['match', ['get', 'scalerank'],
        [4, 5, 6, 7, 8], true, false
      ],
      'layout': {},
      'paint': {
        'line-color': ['interpolate', ['linear'],
          ['zoom'], 0, 'hsla(0, 0%, 0%, 0)', 3, 'hsla(0, 0%, 0%, 0)', 4, 'hsl(0, 0%, 0%)'
        ],
        'line-width': 1
      }
    }, {
      'id': 'water-label-point',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'natural_label',
      'filter': ['all', ['match', ['get', 'class'],
        ['water_feature', 'sea', 'reservoir', 'glacier', 'wetland', 'water', 'bay', 'ocean'], true, false
      ],
      ['match', ['geometry-type'],
        ['Point'], true, false
      ]
      ],
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-font': ['Poppins Light Italic', 'Arial Unicode MS Regular'],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.5,
        'text-line-height': 1.2
      },
      'paint': {
        'text-color': ['interpolate', ['linear'],
          ['zoom'], 0, 'hsla(0, 0%, 100%, 0)', 5, 'hsl(0, 0%, 100%)'
        ]
      }
    }, {
      'id': 'water-label-line',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'natural_label',
      'filter': ['all', ['match', ['get', 'class'],
        ['water_feature', 'sea', 'reservoir', 'glacier', 'wetland', 'water', 'bay', 'ocean'], true, false
      ],
      ['match', ['geometry-type'],
        ['LineString'], true, false
      ]
      ],
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-font': ['Poppins Light Italic', 'Arial Unicode MS Regular'],
        'text-transform': 'uppercase',
        'text-letter-spacing': 0.5,
        'text-line-height': 1.2,
        'symbol-placement': 'line',
        'symbol-spacing': 500
      },
      'paint': {
        'text-color': ['interpolate', ['linear'],
          ['zoom'], 0, 'hsla(0, 0%, 100%, 0)', 5, 'hsl(0, 0%, 100%)'
        ]
      }
    }, {
      'id': 'airport-label',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'airport_label',
      'layout': {
        'text-field': ['step', ['zoom'],
          ['get', 'ref'], 14, ['coalesce', ['get', 'name'],
            ['get', 'name']
          ]
        ],
        'icon-image': ['step', ['zoom'],
          ['concat', ['get', 'maki'], '-11'], 13, ['concat', ['get', 'maki'], '-15']
        ],
        'text-font': ['Poppins Bold', 'Arial Unicode MS Regular'],
        'text-anchor': 'left',
        'text-offset': [1, 0],
        'text-transform': 'uppercase',
        'text-size': 12
      },
      'paint': {
        'text-halo-color': '#eece69',
        'text-halo-width': 30,
        'text-halo-blur': 10
      }
    }, {
      'id': 'poi-label',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'poi_label',
      'filter': ['match', ['get', 'filterrank'],
        [0, 1, 2], true, false
      ],
      'layout': {
        'text-size': 10,
        'icon-image': ['concat', ['get', 'maki'], '-15'],
        'text-transform': 'uppercase',
        'text-font': ['Poppins Bold', 'Arial Unicode MS Regular'],
        'text-justify': 'left',
        'text-padding': 10,
        'text-offset': [1.3, 0],
        'text-anchor': 'left',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'icon-padding': 10
      },
      'paint': {
        'text-halo-color': '#eece69',
        'text-halo-blur': 10,
        'text-halo-width': 30
      }
    }, {
      'id': 'neighbourhood',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'place_label',
      'filter': ['all', ['match', ['get', 'type'],
        ['', 'neighbourhood'], true, false
      ],
      ['match', ['get', 'filterrank'],
        [1, 2, 3], true, false
      ]
      ],
      'layout': {
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ],
        'text-font': ['Poppins Bold', 'Arial Unicode MS Regular'],
        'text-transform': 'uppercase',
        'text-size': 12
      },
      'paint': {
        'text-halo-color': '#eecf68',
        'text-halo-width': 30
      }
    }, {
      'id': 'settlements',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'place_label',
      'filter': ['all', ['match', ['get', 'class'],
        ['settlement'], true, false
      ],
      ['match', ['get', 'filterrank'],
        [1], true, false
      ]
      ],
      'layout': {
        'text-size': 15,
        'icon-image': 'circle-15',
        'text-transform': 'uppercase',
        'text-font': ['Poppins Bold', 'Arial Unicode MS Regular'],
        'text-justify': 'left',
        'text-offset': [0.7, 0],
        'text-anchor': 'left',
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ]
      },
      'paint': {
        'text-halo-color': ['interpolate', ['linear'],
          ['zoom'], 0, '#eecf68', 22, '#eecf68'
        ],
        'text-halo-width': 30,
        'text-halo-blur': 10
      }
    }, {
      'id': 'country',
      'type': 'symbol',
      'source': 'composite',
      'source-layer': 'place_label',
      'filter': ['match', ['get', 'class'],
        ['country'], true, false
      ],
      'layout': {
        'text-font': ['Poppins ExtraBold', 'Arial Unicode MS Regular'],
        'text-transform': 'uppercase',
        'text-size': 18,
        'text-field': ['coalesce', ['get', 'name_en'],
          ['get', 'name']
        ]
      },
      'paint': {
        'text-halo-color': 'hsl(46, 80%, 67%)',
        'text-halo-width': 30,
        'text-halo-blur': 10
      }
    }],
    'created': '2019-03-18T18:43:26.121Z',
    'id': 'cjtep62gq54l21frr1whf27ak',
    'modified': '2019-03-21T06:57:59.897Z',
    'owner': 'mapbox',
    'visibility': 'public',
    'draft': false
  }
}
