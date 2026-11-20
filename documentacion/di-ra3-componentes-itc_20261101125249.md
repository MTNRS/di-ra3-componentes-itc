# Reporte de proyecto

## Información de generación

- **Fecha:** 2026-11-01 12:52:49 +0100
- **Usuario:** freak
- **Equipo:** JARVIS
- **Sistema operativo:** Windows
- **Arquitectura:** x86_64
- **Directorio de ejecución:** `C:/Users/freak/Downloads/jocarsa-generador-windows-x64 (1)`
- **Proyecto documentado:** `C:/Users/freak/Documents/DAM2-entregas/di-ra3-componentes-itc`
- **HMAC-SHA-256 de autenticidad:** `d90634daea5dd3be37641290383b48a13fa03c81b60aa34ff4b77e200799e09c`

> El HMAC-SHA-256 se calcula sobre el documento completo usando un secreto incluido en el programa y 64 ceros en el propio campo del HMAC. El secreto no se escribe en el informe. Este mecanismo permite comprobar integridad y que el documento fue generado con el mismo secreto.

## Estructura del proyecto

```
C:/Users/freak/Documents/DAM2-entregas/di-ra3-componentes-itc
├── .gitignore
├── 01-ejercicios
│   └── RECORRIDO.md
├── 02-proyecto-unidad
│   ├── aplicacion.js
│   ├── index.html
│   └── libreria
│       ├── componentes.js
│       └── estilos.css
├── 03-criterios-evaluacion
│   └── COMPONENTES.md
├── README.md
├── itc-componentes-1.0.0.tgz
├── package-lock.json
├── package.json
└── tests
    └── componentes.test.js
```

## Bases de datos SQLite

Esta sección documenta únicamente el esquema de las bases SQLite detectadas. No se vuelcan registros ni datos de usuario.

No se han encontrado bases SQLite con extensiones .db, .sqlite o .sqlite3.

## Código (intercalado)

# di-ra3-componentes-itc
**README.md**
```markdown
# Desarrollo de interfaces · RA3 · Componentes ITC

Unidad 3: creación de componentes visuales. Continúa el centro de incidencias
de RA2 extrayendo controles reutilizables en JavaScript DOM y CSS. Mantiene el
caso de uso y la navegación anterior/siguiente/revisar; esta fase se centra
en componentes, sin incorporar cámara ni reconocimiento corporal.

Ejecutar `python -m http.server 8103` desde la raíz y abrir
`http://127.0.0.1:8103/02-proyecto-unidad/`.
Instalar herramientas de prueba: `npm install`. Probar: `npm test`.
Empaquetar: `npm pack`; el archivo tgz incluye la librería y estilos.
No se publica en npm. El prototipo académico utiliza datos ficticios y no
se conecta a producción de Integra Tech Consulting.

## Uso de IA

Se ha utilizado asistencia de IA para implementar componentes y revisar
pruebas. El alumno debe ejecutarlos, comprenderlos y explicar las decisiones
antes de entregar; esa revisión personal sigue pendiente.
```
**package-lock.json**
```json
{
  "name": "itc-componentes",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "itc-componentes",
      "version": "1.0.0",
      "devDependencies": {
        "jsdom": "*"
      }
    },
    "node_modules/@asamuzakjp/css-color": {
      "version": "5.1.11",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/css-color/-/css-color-5.1.11.tgz",
      "integrity": "sha512-KVw6qIiCTUQhByfTd78h2yD1/00waTmm9uy/R7Ck/ctUyAPj+AEDLkQIdJW0T8+qGgj3j5bpNKK7Q3G+LedJWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/generational-cache": "^1.0.1",
        "@csstools/css-calc": "^3.2.0",
        "@csstools/css-color-parser": "^4.1.0",
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/dom-selector": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/dom-selector/-/dom-selector-7.1.1.tgz",
      "integrity": "sha512-67RZDnYRc8H/8MLDgQCDE//zoqVFwajkepHZgmXrbwybzXOEwOWGPYGmALYl9J2DOLfFPPs6kKCqmbzV895hTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/generational-cache": "^1.0.1",
        "@asamuzakjp/nwsapi": "^2.3.9",
        "bidi-js": "^1.0.3",
        "css-tree": "^3.2.1",
        "is-potential-custom-element-name": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/generational-cache": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/generational-cache/-/generational-cache-1.0.1.tgz",
      "integrity": "sha512-wajfB8KqzMCN2KGNFdLkReeHncd0AslUSrvHVvvYWuU8ghncRJoA50kT3zP9MVL0+9g4/67H+cdvBskj9THPzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/nwsapi": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/nwsapi/-/nwsapi-2.3.9.tgz",
      "integrity": "sha512-n8GuYSrI9bF7FFZ/SjhwevlHc8xaVlb/7HmHelnc/PZXBD2ZR49NnN9sMMuDdEGPeeRQ5d0hqlSlEpgCX3Wl0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@bramus/specificity": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/@bramus/specificity/-/specificity-2.4.3.tgz",
      "integrity": "sha512-0GEz8qJWokkUVYQYRukmkSHIFNoBH8QTreeHrAFbvz1XFYc3Y+puhMs8PQ5x8GNugiC2l5jvDBXKLbBIByeSBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "css-tree": "^3.2.1"
      },
      "bin": {
        "specificity": "bin/cli.js"
      }
    },
    "node_modules/@csstools/color-helpers": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/@csstools/color-helpers/-/color-helpers-6.1.2.tgz",
      "integrity": "sha512-grhRy3OKmniaAEKXMjua5z/EODX0MSqBGjunw8+j/3HQjOnahs2AGhvEOIYVUWcU6ScApbhLhVrQTX8XqrMrow==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@csstools/css-calc": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/@csstools/css-calc/-/css-calc-3.4.3.tgz",
      "integrity": "sha512-iex20d8CHVkyvg6B7UKV7uHnI2Bqo9g+EFfT9E0y+GvTvhZ/DwONJ+9aKb1dlqm0ZiGsL5RXjp0fCoJYnkeDjA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.2",
        "@csstools/css-tokenizer": "^4.0.2"
      }
    },
    "node_modules/@csstools/css-color-parser": {
      "version": "4.2.7",
      "resolved": "https://registry.npmjs.org/@csstools/css-color-parser/-/css-color-parser-4.2.7.tgz",
      "integrity": "sha512-zgm9yjQz5iJB4VL8RyVwd71TWB8Q89FSxt/NzXoWqPSkEBOVtn9L6vAPtSc9hpKfB0Awo/AL2VKFHjYetBLFHQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@csstools/color-helpers": "^6.1.2",
        "@csstools/css-calc": "^3.4.3"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.2",
        "@csstools/css-tokenizer": "^4.0.2"
      }
    },
    "node_modules/@csstools/css-parser-algorithms": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@csstools/css-parser-algorithms/-/css-parser-algorithms-4.0.2.tgz",
      "integrity": "sha512-40cSKyMvK+tq4qz6Awrlye2WGuOKt3FwPgtGg6KTfbHOWNw+Rk1rzbAtZnZ6IBhsY491HLRnDXwoyBAijmmILA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-tokenizer": "^4.0.2"
      }
    },
    "node_modules/@csstools/css-syntax-patches-for-csstree": {
      "version": "1.1.16",
      "resolved": "https://registry.npmjs.org/@csstools/css-syntax-patches-for-csstree/-/css-syntax-patches-for-csstree-1.1.16.tgz",
      "integrity": "sha512-LsDbJPP/B8cPasUJyTA5S99F7C4G93ngW8hUluXz8CFeOaaRnBPtBiIlvgcPYU0HmHNz8CXg+1vwFrIB4F6Dgw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "peerDependencies": {
        "css-tree": "^3.2.1"
      },
      "peerDependenciesMeta": {
        "css-tree": {
          "optional": true
        }
      }
    },
    "node_modules/@csstools/css-tokenizer": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@csstools/css-tokenizer/-/css-tokenizer-4.0.2.tgz",
      "integrity": "sha512-OoKoR0f76dCY666JlcbhmVTs2drYj1GUXZTYTcbUgJjh9Nv41aFfZ21bPQTERm5+L5cBDo466NltB2lplS5GBw==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@exodus/bytes": {
      "version": "1.16.0",
      "resolved": "https://registry.npmjs.org/@exodus/bytes/-/bytes-1.16.0.tgz",
      "integrity": "sha512-IcpW84uEn3N7ETtNZMlxKhfl6Pec8rUNGOTBtWbK1FKhJxIFAptZyVrvVRVBimAJxJCgc3PxepxkdWWG4DVzfA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@noble/hashes": "^1.8.0 || ^2.0.0"
      },
      "peerDependenciesMeta": {
        "@noble/hashes": {
          "optional": true
        }
      }
    },
    "node_modules/bidi-js": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/bidi-js/-/bidi-js-1.1.0.tgz",
      "integrity": "sha512-fX1Onk0tdVPC7obPWB5EbJ1z7NVhLq4m2xZLq2YXBkxzMXIGRpNMU88n0EPgWseKl12J7zXs7qrDxPK4sRs2fg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "require-from-string": "^2.0.2"
      }
    },
    "node_modules/css-tree": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-3.2.1.tgz",
      "integrity": "sha512-X7sjQzceUhu1u7Y/ylrRZFU2FS6LRiFVp6rKLPg23y3x3c3DOKAwuXGDp+PAGjh6CSnCjYeAul8pcT8bAl+lSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mdn-data": "2.27.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/data-urls": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-7.0.0.tgz",
      "integrity": "sha512-23XHcCF+coGYevirZceTVD7NdJOqVn+49IHyxgszm+JIiHLoB2TkmPtsYkNWT1pvRSGkc35L6NHs0yHkN2SumA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/entities": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-8.1.0.tgz",
      "integrity": "sha512-kxL7msIffSuh9aaFAMD7rxAIuTRMAHMeBtgHW2yUdWw732ZNh4MehkF2gdjvtdmikkaIP9bFDDJOPlsvm7avrA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/html-encoding-sniffer": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-6.0.0.tgz",
      "integrity": "sha512-CV9TW3Y3f8/wT0BRFc1/KAVQ3TUHiXmaAb6VW9vtiMFf7SLoMd1PdAc4W3KFOFETBJUb90KatHqlsZMWV+R9Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.6.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsdom": {
      "version": "29.1.1",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-29.1.1.tgz",
      "integrity": "sha512-ECi4Fi2f7BdJtUKTflYRTiaMxIB0O6zfR1fX0GXpUrf6flp8QIYn1UT20YQqdSOfk2dfkCwS8LAFoJDEppNK5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/css-color": "^5.1.11",
        "@asamuzakjp/dom-selector": "^7.1.1",
        "@bramus/specificity": "^2.4.2",
        "@csstools/css-syntax-patches-for-csstree": "^1.1.3",
        "@exodus/bytes": "^1.15.0",
        "css-tree": "^3.2.1",
        "data-urls": "^7.0.0",
        "decimal.js": "^10.6.0",
        "html-encoding-sniffer": "^6.0.0",
        "is-potential-custom-element-name": "^1.0.1",
        "lru-cache": "^11.3.5",
        "parse5": "^8.0.1",
        "saxes": "^6.0.0",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^6.0.1",
        "undici": "^7.25.0",
        "w3c-xmlserializer": "^5.0.0",
        "webidl-conversions": "^8.0.1",
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.1",
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24.0.0"
      },
      "peerDependencies": {
        "canvas": "^3.0.0"
      },
      "peerDependenciesMeta": {
        "canvas": {
          "optional": true
        }
      }
    },
    "node_modules/lru-cache": {
      "version": "11.5.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.5.3.tgz",
      "integrity": "sha512-U4N8FgzmWxc8k1VH8Kr6lQg18U7Fjvby6wXHVRX/ZZ7IwWbRMgrRbP0Wrb5q5NVinryp4SQampHKdvtecItxUg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.27.1",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.27.1.tgz",
      "integrity": "sha512-9Yubnt3e8A0OKwxYSXyhLymGW4sCufcLG6VdiDdUGVkPhpqLxlvP5vl1983gQjJl3tqbrM731mjaZaP68AgosQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/parse5": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-8.0.1.tgz",
      "integrity": "sha512-z1e/HMG90obSGeidlli3hj7cbocou0/wa5HacvI3ASx34PecNjNQeaHNo5WIZpWofN9kgkqV1q5YvXe3F0FoPw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "entities": "^8.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/saxes": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
      "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "xmlchars": "^2.2.0"
      },
      "engines": {
        "node": ">=v12.22.7"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tldts": {
      "version": "7.4.19",
      "resolved": "https://registry.npmjs.org/tldts/-/tldts-7.4.19.tgz",
      "integrity": "sha512-48dH6aSpQnpbzDUc4vIQZ1VjB8tkK+e8c1yx05/SZK+rkssgjEOlxDd/yU8/a4vGYQ9vRgJr9dwMq9TJ0b3X2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^7.4.19"
      },
      "bin": {
        "tldts": "bin/cli.js"
      }
    },
    "node_modules/tldts-core": {
      "version": "7.4.20",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-7.4.20.tgz",
      "integrity": "sha512-C630TWXZCZmLq0F2bW4QqwnaaxCQ/svpAqvJwnC4JvgEM5ohhBnGsEzTLSOXcN+xjz+kEaHS5uoWIw2klnqd0A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tough-cookie": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-6.0.2.tgz",
      "integrity": "sha512-exgYmnmL/sJpR3upZfXG5PoatXQii55xAiXGXzY+sROLZ/Y+SLcp9PgJNI9Vz37HpQ74WvDcLT8eqm+kV3FzrA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tldts": "^7.0.5"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/tr46": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-6.0.0.tgz",
      "integrity": "sha512-bLVMLPtstlZ4iMQHpFHTR7GAGj2jxi8Dg0s2h2MafAE4uSWF98FC/3MomU51iQAMf8/qDUbKWf5GxuvvVcXEhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/undici": {
      "version": "7.30.1",
      "resolved": "https://registry.npmjs.org/undici/-/undici-7.30.1.tgz",
      "integrity": "sha512-03KrMbjIFDWQR5RNPrSw3bd1r12JpyFQl9/yxjUbJtqkjmllqC5lFjZh6ujeuJCKr8EOQvRW872Oy/az+nLYxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.18.1"
      }
    },
    "node_modules/w3c-xmlserializer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
      "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-8.0.1.tgz",
      "integrity": "sha512-BMhLD/Sw+GbJC21C/UgyaZX41nPt8bUTg+jWyDeg7e7YN4xOM05YPSIXceACnXVtqyEw/LMClUQMtMZ+PGGpqQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-5.0.0.tgz",
      "integrity": "sha512-sXcNcHOC51uPGF0P/D4NVtrkjSU2fNsm9iog4ZvZJsL3rjoDAzXZhkm2MWt1y+PUdggKAYVoMAIYcs78wJ51Cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/whatwg-url": {
      "version": "16.0.1",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-16.0.1.tgz",
      "integrity": "sha512-1to4zXBxmXHV3IiSSEInrreIlu02vUOvrhxJJH5vcxYTBDAx51cqZiKdyTxlecdKNSjj8EcxGBxNf6Vg+945gw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.11.0",
        "tr46": "^6.0.0",
        "webidl-conversions": "^8.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/xml-name-validator": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
      "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true,
      "license": "MIT"
    }
  }
}
```
**package.json**
```json
{"name":"itc-componentes","version":"1.0.0","type":"module","files":["02-proyecto-unidad/libreria"],"scripts":{"test":"node --test tests/*.test.js"},"devDependencies":{"jsdom":"*"}}
```
## 01-ejercicios
**RECORRIDO.md**
```markdown
# Prácticas

1. Crear Boton con texto y estado por defecto; asociar click.
2. Crear Mensaje con método actualizar.
3. Componer TarjetaIncidencia y emitir itc-revisada.
4. Probar eventos, valores por defecto y bloqueo de doble revisión.

Referencia: unidad 003, componentes, propiedades y métodos, eventos,
herramientas de desarrollo, pruebas y empaquetado.
```
## 02-proyecto-unidad
**aplicacion.js**
```js
import {Boton,Mensaje,TarjetaIncidencia} from './libreria/componentes.js';
const mensaje=new Mensaje();document.querySelector('#mensaje').append(mensaje.elemento);
const datos=[{titulo:'Acceso al portal',detalle:'Empresa ficticia Nexo Formación',prioridad:'Alta'},{titulo:'Revisión del portátil',detalle:'Equipo de demostración ITC-014'},{titulo:'Consulta de inventario',detalle:'Verificar disponibilidad de monitores'}];
const tarjetas=datos.map(d=>new TarjetaIncidencia(d));
let indice=0;
function seleccionar(){tarjetas.forEach((t,i)=>t.seleccionar(i===indice));mensaje.actualizar('Incidencia '+(indice+1)+' seleccionada');}
const acciones=[new Boton({texto:'Anterior',accion:()=>{indice=(indice+tarjetas.length-1)%tarjetas.length;seleccionar();}}),new Boton({texto:'Siguiente',accion:()=>{indice=(indice+1)%tarjetas.length;seleccionar();}}),new Boton({texto:'Revisar seleccionada',accion:()=>tarjetas[indice].revisar()})];
document.querySelector('#acciones').append(...acciones.map(b=>b.elemento));
document.querySelector('#tarjetas').append(...tarjetas.map(t=>t.elemento));
document.querySelector('#tarjetas').addEventListener('itc-revisada',()=>mensaje.actualizar('Incidencia revisada correctamente'));
seleccionar();
```
**index.html**
```html
<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ITC · Centro de incidencias</title><link rel="stylesheet" href="libreria/estilos.css"></head><body><header><h1>ITC · Centro de incidencias</h1><p>RA3 · Componentes reutilizables para el caso de uso del RA2</p></header><main><div id="mensaje"></div><nav id="acciones" aria-label="Navegación de incidencias"></nav><section id="tarjetas" aria-label="Incidencias ficticias"></section></main><script type="module" src="aplicacion.js"></script></body></html>
```
### libreria
**componentes.js**
```js
/** Componentes DOM propios, sin framework. */
export class Boton {
  constructor({texto='Aceptar',deshabilitado=false,accion=()=>{}}={}) {
    this.elemento=document.createElement('button');
    this.elemento.type='button';
    this.elemento.textContent=texto;
    this.elemento.disabled=deshabilitado;
    this.elemento.addEventListener('click',accion);
  }
  habilitar(valor=true){this.elemento.disabled=!valor;}
}

export class Mensaje {
  constructor({texto='Preparado'}={}) {
    this.elemento=document.createElement('p');
    this.elemento.setAttribute('role','status');
    this.actualizar(texto);
  }
  actualizar(texto){this.elemento.textContent=texto;}
}

export class TarjetaIncidencia {
  constructor({titulo='Sin título',detalle='',prioridad='Normal',revisada=false}={}) {
    this.revisada=revisada;
    this.elemento=document.createElement('article');
    this.elemento.className='itc-tarjeta';
    const etiqueta=document.createElement('small');etiqueta.textContent=prioridad;
    const cabecera=document.createElement('h2');cabecera.textContent=titulo;
    const descripcion=document.createElement('p');descripcion.textContent=detalle;
    this.boton=new Boton({texto:revisada?'Revisada':'Marcar revisada',deshabilitado:revisada,accion:()=>this.revisar()});
    this.elemento.append(etiqueta,cabecera,descripcion,this.boton.elemento);
  }
  revisar(){
    if(this.revisada)return;
    this.revisada=true;this.boton.elemento.textContent='Revisada';this.boton.habilitar(false);
    this.elemento.dispatchEvent(new CustomEvent('itc-revisada',{bubbles:true,detail:{revisada:true}}));
  }
  seleccionar(valor=true){this.elemento.classList.toggle('seleccionada',valor);}
}
```
**estilos.css**
```css
body{margin:0;background:#f2f7fa;color:#163247;font:16px system-ui}main{max-width:1000px;margin:auto;padding:32px}header{padding:24px;background:#0b3047;color:white}header p{color:#a8d5e9}button{padding:10px 15px;border:0;border-radius:7px;background:#087aaa;color:white;cursor:pointer}button:disabled{background:#bfd0d8;color:#345}#tarjetas{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}.itc-tarjeta{padding:24px;border:2px solid #d5e5ed;background:white;border-radius:12px}.itc-tarjeta.seleccionada{border-color:#139b75}.itc-tarjeta small{color:#087aaa}nav{display:flex;gap:12px;margin:20px 0}
```
## 03-criterios-evaluacion
**COMPONENTES.md**
```markdown
# API y criterios

| Componente | Propiedades por defecto | Métodos | Eventos |
|---|---|---|---|
| Boton | texto=Aceptar, deshabilitado=false | habilitar(valor=true) | click ejecuta accion |
| Mensaje | texto=Preparado | actualizar(texto) | role=status anuncia cambios |
| TarjetaIncidencia | titulo=Sin título, detalle vacío, prioridad=Normal, revisada=false | revisar(), seleccionar(valor=true) | itc-revisada, propagable, detail.revisada=true |

Los componentes exponen elemento para insertarlos en el DOM. El estado es de
sesión y no se guarda al recargar. Las entradas se muestran con textContent.

| Criterio | Evidencia |
|---|---|
| a | JavaScript DOM/CSS para diseño; node:test y jsdom para prueba DOM |
| b-c | Tres clases con constructor, propiedades, métodos y valores por defecto |
| d | click y evento personalizado itc-revisada conectados a acciones |
| e | tests/componentes.test.js prueba los tres componentes |
| f | Esta tabla documenta API y comportamiento |
| g | package.json limita npm pack a librería y estilos |
| h | index.html y aplicacion.js utilizan los tres componentes |
```
## tests
**componentes.test.js**
```js
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {Boton,Mensaje,TarjetaIncidencia} from '../02-proyecto-unidad/libreria/componentes.js';
const dom=new JSDOM();globalThis.document=dom.window.document;globalThis.CustomEvent=dom.window.CustomEvent;
test('botón tiene valores por defecto y respeta disabled',()=>{let n=0;const b=new Boton({accion:()=>n++});assert.equal(b.elemento.textContent,'Aceptar');b.elemento.click();b.habilitar(false);b.elemento.click();assert.equal(n,1);});
test('mensaje muestra texto como contenido seguro',()=>{const m=new Mensaje();m.actualizar('<script>');assert.equal(m.elemento.children.length,0);assert.equal(m.elemento.textContent,'<script>');});
test('tarjeta emite una sola revisión y permite seleccionar',()=>{const t=new TarjetaIncidencia();let n=0;t.elemento.addEventListener('itc-revisada',()=>n++);t.boton.elemento.click();t.revisar();assert.equal(n,1);assert.equal(t.boton.elemento.disabled,true);t.seleccionar();assert.equal(t.elemento.classList.contains('seleccionada'),true);});
```
