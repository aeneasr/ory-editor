import screenshot from './images/screenshot.png'

import { STRONG } from 'src/editor/plugins/content/slate/plugins/emphasize'
import { H1, H3 } from 'src/editor/plugins/content/slate/plugins/headings'
import { A } from 'src/editor/plugins/content/slate/plugins/link'
import { P } from 'src/editor/plugins/content/slate/plugins/paragraph'

export default {
  1: {
    id: '1',
    cells: [{
      rows: [{
        cells: [{
          rows: [{
            cells: [{
              content: {
                plugin: { name: 'ory/editor/core/content/slate' },
                state: {
                  serialized: {
                    "nodes": [
                      {
                        "kind": "block",
                        "type": P,
                        "nodes": [
                          {
                            "kind": "text",
                            "ranges": [
                              {
                                "text": "Get to know us",
                                "marks": [
                                  {
                                    "type": STRONG
                                  }
                                ]
                              },
                            ]
                          },
                          {
                            "kind": "inline",
                            "type": A,
                            "data": {
                              "href": "https://en.wikipedia.org/wiki/Hypertext"
                            },
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "Contact a human"
                              },
                            ]
                          },
                          {
                            "kind": "inline",
                            "type": A,
                            "data": {
                              "href": "https://en.wikipedia.org/wiki/Hypertext"
                            },
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "\nORY on GitHub.com\n"
                              },
                            ]
                          },
                        ]
                      },
                    ]
                  }
                }
              }
            }, {
              content: {
                plugin: { name: 'ory/editor/core/content/slate' },
                state: {
                  serialized: {
                    "nodes": [
                      {
                        "kind": "block",
                        "type": P,
                        "nodes": [
                          {
                            "kind": "text",
                            "ranges": [
                              {
                                "text": "ORY GmbH",
                                "marks": [
                                  {
                                    "type": STRONG
                                  }
                                ]
                              },
                              {
                                "text": "\nBelfortstrasse 14\nGermany",
                              }
                            ]
                          }
                        ],
                        data: {
                          align: 'right'
                        }
                      },
                    ]
                  }
                }
              }
            }]
          }]
        }]
      }]
    }]
  },
  [0]: {
    id: '0',
    cells: [{
      rows: [{
        cells: [{
          layout: {
            plugin: { name: 'home/layout/video' }
          },
          rows: [{
            cells: [{
              content: {
                plugin: { name: 'ory/editor/core/content/slate' },
                state: {
                  serialized: {
                    "nodes": [
                      {
                        "kind": "block",
                        "type": H1,
                        "nodes": [
                          {
                            "kind": "text",
                            "text": "ORY EDITOR"
                          }
                        ],
                      },
                      {
                        "kind": "block",
                        "type": P,
                        "nodes": [
                          {
                            "kind": "text",
                            "text": "The Open Source Content Toolchain"
                          }
                        ],
                      },
                    ]
                  }
                }
              }
            }]
          }]
        }]
      }, {
        cells: [{
          layout: {
            plugin: { name: 'home/layout/container' }
          },
          rows: [{
            cells: [{
              size: 2,
              content: {
                plugin: { name: 'ory/editor/core/content/spacer' },
                state: {}
              }
            }, {
              size: 8,
              content: {
                plugin: { name: 'ory/editor/core/content/slate' },
                state: {
                  serialized: {
                    "nodes": [
                      {
                        "kind": "block",
                        "type": H3,
                        "nodes": [
                          {
                            "kind": "text",
                            "text": "With the ORY Editor, you can\nbuild and edit pages like this one. Go ahead and\ncheck out what's possible!"
                          }
                        ],
                        data: {
                          align: 'center'
                        }
                      },
                    ]
                  }
                }
              }
            }, {
              size: 2,
              content: {
                plugin: { name: 'ory/editor/core/content/spacer' },
                state: {}
              }
            }]
          }, {
            cells: [{
              content: {
                plugin: { name: 'ory/editor/core/content/slate' },
                state: {
                  serialized: {
                    "nodes": [
                      {
                        "kind": "block",
                        "type": P,
                        "nodes": [
                          {
                            "kind": "text",
                            "text": "The Ory Editor is part of the Ory Content Toolchain, a set of tools helping you in building, distributing and managing content. With state of the art in browser technology and well designed systems architecture, you can finally say goodbye to hacks, html purifiers, steep learning curves, poor markup and complex plugin APIs."
                          }
                        ],
                      },
                    ]
                  }
                }
              }
            }]
          }, {
            cells: [{
              rows: [{
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/image' },
                    state: {
                      src: screenshot
                    }
                  }
                }]
              }, {
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/slate' },
                    state: {
                      serialized: {
                        "nodes": [
                          {
                            "kind": "block",
                            "type": H3,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "Work in context"
                              }
                            ],
                          },
                          {
                            "kind": "block",
                            "type": P,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "The following is placeholder text known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Aenean eu justo sed elit dignissim aliquam. Mauris id fermentum nulla. Phasellus sodales massa malesuada tellus fringilla, nec bibendum tellus blandit."
                              }
                            ],
                          },
                        ]
                      }
                    }
                  }
                }]
              }],
            }, {
              rows: [{
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/image' },
                    state: {
                      src: screenshot
                    }
                  }
                }]
              }, {
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/slate' },
                    state: {
                      serialized: {
                        "nodes": [
                          {
                            "kind": "block",
                            "type": H3,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "Build layouts"
                              }
                            ],
                          },
                          {
                            "kind": "block",
                            "type": P,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "The following is placeholder text known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Aenean eu justo sed elit dignissim aliquam. Mauris id fermentum nulla. Phasellus sodales massa malesuada tellus fringilla, nec bibendum tellus blandit."
                              }
                            ],
                          },
                        ]
                      }
                    }
                  }
                }]
              }],
            }, {
              rows: [{
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/image' },
                    state: {
                      src: screenshot
                    }
                  }
                }]
              }, {
                cells: [{
                  content: {
                    plugin: { name: 'ory/editor/core/content/slate' },
                    state: {
                      serialized: {
                        "nodes": [
                          {
                            "kind": "block",
                            "type": H3,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "Collaborate"
                              }
                            ],
                          },
                          {
                            "kind": "block",
                            "type": P,
                            "nodes": [
                              {
                                "kind": "text",
                                "text": "The following is placeholder text known as “lorem ipsum,” which is scrambled Latin used by designers to mimic real copy. Aenean eu justo sed elit dignissim aliquam. Mauris id fermentum nulla. Phasellus sodales massa malesuada tellus fringilla, nec bibendum tellus blandit."
                              }
                            ],
                          },
                        ]
                      }
                    }
                  }
                }]
              }]
            }]
          }]
        }]
      }]
    }]
  }
}
