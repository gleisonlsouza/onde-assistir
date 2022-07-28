import React from 'react'

import styles from './../../styles/WatchProvider.module.scss'
import Image from 'next/future/image'

type FilmProviderProps = {    
    [key:string]:any,   
    flatrate:[
        {
            logo_path:string,
            provider_name:string,   
        }
    ],
    buy:[
        {
            logo_path:string,
            provider_name:string,   
        }
    ],
    rent:[
        {
            logo_path:string,
            provider_name:string,   
        }
    ]
}

type ProviderProps = {
    logo_path:string,
    provider_name:string, 
}

interface iFilmProvider{
    filmProvider: FilmProviderProps;
}

export default function WatchProvider({filmProvider}:iFilmProvider) {

     // List Location
     const locations = [
        {
          "iso_3166_1": "AE",
          "english_name": "United Arab Emirates",
          "native_name": "Emirados Árabes Unidos"
        },
        {
            "iso_3166_1": "AD",
            "english_name": "Andorra",
            "native_name": "Andorra"
        },
        {
            "iso_3166_1": "AL",
            "english_name": "Albânia",
            "native_name": "Albânia"
        },
        {
          "iso_3166_1": "AR",
          "english_name": "Argentina",
          "native_name": "Argentina"
        },
        {
          "iso_3166_1": "AT",
          "english_name": "Austria",
          "native_name": "Áustria"
        },
        {
          "iso_3166_1": "AU",
          "english_name": "Australia",
          "native_name": "Austrália"
        },
        {
            "iso_3166_1": "BA",
            "english_name": "Bósnia e Herzegóvina",
            "native_name": "Bósnia e Herzegóvina"
        },
        {
          "iso_3166_1": "BE",
          "english_name": "Belgium",
          "native_name": "Bélgica"
        },
        {
          "iso_3166_1": "BG",
          "english_name": "Bulgaria",
          "native_name": "Bulgária"
        },
        {
          "iso_3166_1": "BO",
          "english_name": "Bolívia",
          "native_name": "Bolívia"
        },
        {
          "iso_3166_1": "BR",
          "english_name": "Brazil",
          "native_name": "Brasil"
        },
        {
          "iso_3166_1": "CA",
          "english_name": "Canada",
          "native_name": "Canadá"
        },
        {
          "iso_3166_1": "CH",
          "english_name": "Switzerland",
          "native_name": "Suíça"
        },
        {
          "iso_3166_1": "CI",
          "english_name": "Cote D'Ivoire",
          "native_name": "Costa do Marfim"
        },
        {
            "iso_3166_1": "CL",
            "english_name": "Chile",
            "native_name": "Chile"
        },
        {
            "iso_3166_1": "CO",
            "english_name": "Colômbia",
            "native_name": "Colômbia"
        },
        {
            "iso_3166_1": "CR",
            "english_name": "Costa Rica",
            "native_name": "Costa Rica"
        },
        {
          "iso_3166_1": "CZ",
          "english_name": "Czech Republic",
          "native_name": "Tchéquia"
        },
        {
          "iso_3166_1": "DE",
          "english_name": "Germany",
          "native_name": "Alemanha"
        },
        {
          "iso_3166_1": "DK",
          "english_name": "Denmark",
          "native_name": "Dinamarca"
        },
        {
            "iso_3166_1": "DO",
            "english_name": "República Dominicana",
            "native_name": "República Dominicana"
        },
        {
          "iso_3166_1": "EC",
          "english_name": "Equador",
          "native_name": "Equador"
        },
        {
          "iso_3166_1": "EE",
          "english_name": "Estonia",
          "native_name": "Estônia"
        },
        {
          "iso_3166_1": "EG",
          "english_name": "Egito",
          "native_name": "Egito"
        },        
        {
          "iso_3166_1": "ES",
          "english_name": "Spain",
          "native_name": "Espanha"
        },
        {
          "iso_3166_1": "FI",
          "english_name": "Finland",
          "native_name": "Finlândia"
        },
        {
          "iso_3166_1": "FR",
          "english_name": "France",
          "native_name": "França"
        },
        {
          "iso_3166_1": "GB",
          "english_name": "United Kingdom",
          "native_name": "Reino Unido"
        },
        {
            "iso_3166_1": "GR",
            "english_name": "Grécia",
            "native_name": "Grécia"
        },
        {
            "iso_3166_1": "GT",
            "english_name": "Guatemala",
            "native_name": "Guatemala"
        },        
        {
          "iso_3166_1": "HK",
          "english_name": "Hong Kong",
          "native_name": "Hong Kong, RAE da China"
        },
        {
            "iso_3166_1": "HN",
            "english_name": "Honduras",
            "native_name": "Honduras"
          },
        {
          "iso_3166_1": "HR",
          "english_name": "Croatia",
          "native_name": "Croácia"
        },
        {
          "iso_3166_1": "HU",
          "english_name": "Hungary",
          "native_name": "Hungria"
        },
        {
          "iso_3166_1": "ID",
          "english_name": "Indonesia",
          "native_name": "Indonésia"
        },
        {
          "iso_3166_1": "IE",
          "english_name": "Ireland",
          "native_name": "Irlanda"
        },
        {
          "iso_3166_1": "IN",
          "english_name": "India",
          "native_name": "Índia"
        },
        {
            "iso_3166_1": "IS",
            "english_name": "Islândia",
            "native_name": "Islândia"
        },
        {
          "iso_3166_1": "IT",
          "english_name": "Italy",
          "native_name": "Itália"
        },
        {
          "iso_3166_1": "JP",
          "english_name": "Japan",
          "native_name": "Japão"
        },
        {
          "iso_3166_1": "KE",
          "english_name": "Kenya",
          "native_name": "Quênia"
        },
        {
          "iso_3166_1": "KR",
          "english_name": "South Korea",
          "native_name": "Coreia do Sul"
        },
        {
            "iso_3166_1": "LI",
            "english_name": "Liechtenstein",
            "native_name": "Liechtenstein"
        },
        {
          "iso_3166_1": "LT",
          "english_name": "Lithuania",
          "native_name": "Lituânia"
        },
        {
            "iso_3166_1": "LV",
            "english_name": "Letônia",
            "native_name": "Letônia"
        },
        {
            "iso_3166_1": "MK",
            "english_name": "República da Macedonia	",
            "native_name": "República da Macedonia	"
        },
        {
            "iso_3166_1": "MT",
            "english_name": "Malta",
            "native_name": "Malta"
        },        
        {
          "iso_3166_1": "MX",
          "english_name": "Mexico",
          "native_name": "México"
        },
        {
            "iso_3166_1": "MY",
            "english_name": "Malásia",
            "native_name": "Malásia"
          },
        {
          "iso_3166_1": "NL",
          "english_name": "Netherlands",
          "native_name": "Países Baixos"
        },
        {
          "iso_3166_1": "NO",
          "english_name": "Norway",
          "native_name": "Noruega"
        },
        {
          "iso_3166_1": "NZ",
          "english_name": "New Zealand",
          "native_name": "Nova Zelândia"
        },
        {
            "iso_3166_1": "PE",
            "english_name": "Peru",
            "native_name": "Peru"
        },
        {
          "iso_3166_1": "PH",
          "english_name": "Philippines",
          "native_name": "Filipinas"
        },
        {
          "iso_3166_1": "PL",
          "english_name": "Poland",
          "native_name": "Polônia"
        },
        {
          "iso_3166_1": "PT",
          "english_name": "Portugal",
          "native_name": "Portugal"
        },
        {
            "iso_3166_1": "PY",
            "english_name": "Paraguai",
            "native_name": "Paraguai"
        },
        {
            "iso_3166_1": "RO",
            "english_name": "Romênia",
            "native_name": "Romênia"
        },
        {
          "iso_3166_1": "RS",
          "english_name": "Serbia",
          "native_name": "Sérvia"
        },
        {
          "iso_3166_1": "RU",
          "english_name": "Russia",
          "native_name": "Rússia"
        },
        {
          "iso_3166_1": "SA",
          "english_name": "Arábia Saudita	",
          "native_name": "Arábia Saudita	"
        },
        {
          "iso_3166_1": "SE",
          "english_name": "Sweden",
          "native_name": "Suécia"
        },
        {
            "iso_3166_1": "SG",
            "english_name": "Singapura",
            "native_name": "Singapura"
        },
        {
            "iso_3166_1": "SI",
            "english_name": "Eslovenia",
            "native_name": "Eslovenia"
        },
        {
          "iso_3166_1": "SK",
          "english_name": "Slovakia",
          "native_name": "Eslováquia"
        },
        {
            "iso_3166_1": "SM",
            "english_name": "São Marino",
            "native_name": "São Marino"
        },
        {
            "iso_3166_1": "TH",
            "english_name": "Tailândia",
            "native_name": "Tailândia"
        },
        {
            "iso_3166_1": "TW",
            "english_name": "Taiwan",
            "native_name": "Taiwan"
        },
        {
          "iso_3166_1": "TR",
          "english_name": "Turkey",
          "native_name": "Turquia"
        },
        {
          "iso_3166_1": "US",
          "english_name": "United States of America",
          "native_name": "Estados Unidos"
        },
        {
            "iso_3166_1": "UY",
            "english_name": "Uruguai",
            "native_name": "Uruguai"
        },
        {
            "iso_3166_1": "VE",
            "english_name": "Venezuela",
            "native_name": "Venezuela"
        },
        {
          "iso_3166_1": "ZA",
          "english_name": "South Africa",
          "native_name": "África do Sul"
        }
      ]

    const returnRegion = (countyID:string) => {
      const locale = locations.filter(({iso_3166_1}) => iso_3166_1 === countyID ); 
      ///console.log(countyID)   
      if(locale[0]){
          return locale[0].native_name;
      }else{
          return 'Indisponível'
      }
    
    }

  return (
   <>
    {Object.keys(filmProvider).map((region:string,index:number) => (
                <div key={index} className={styles.providers}>
                    <h3>{region && returnRegion(region)}</h3>
                    <h4>Stream</h4>
                    <div className={styles.listProviders}>
                        {!filmProvider[region].flatrate ? <p>Não disponível</p> : filmProvider[region].flatrate.map((provider:ProviderProps,index:number) =>(
                            <Image 
                                key={index}
                                src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                                height={50}
                                width={50}
                                alt={provider.provider_name}
                            />
                        )) }  
                    </div>
                    <h4>Aluguar</h4>
                    <div className={styles.listProviders}>
                        {!filmProvider[region].rent ? <p>Não disponível</p> : filmProvider[region].rent.map((provider:ProviderProps,index:number) =>(
                            <Image 
                                key={index}
                                src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                                height={50}
                                width={50}
                                alt={provider.provider_name}
                            />
                        )) }  
                    </div>
                    <h4>Comprar</h4>
                    <div className={styles.listProviders}>
                        {!filmProvider[region].buy ? <p>Não disponível</p> : filmProvider[region].buy.map((provider:ProviderProps,index:number) =>(
                            <Image 
                                key={index}
                                src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                                height={50}
                                width={50}
                                alt={provider.provider_name}
                            />
                        )) }  
                    </div>                 
                </div>
              ))}
   </>
  )
}
