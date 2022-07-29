import React, { useState } from 'react'

import styles from './../../styles/WatchProvider.module.scss'
import Image from 'next/future/image'

type ProvidersProps = {    
    [key:string]:any,   
    flatrate?:[
        {
            logo_path:string,
            provider_name:string,   
        }
    ],
    buy?:[
        {
            logo_path:string,
            provider_name:string,   
        }
    ],
    rent?:[
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

interface iProviders{
    providers: ProvidersProps;    
}

export default function WatchProvider({providers}:iProviders) {

    const [activeLocation, setActiveLocation] = useState('')

     // List Location
     const locations = [
        {
          "iso_3166_1": "AE",
          "english_name": "United Arab Emirates",
          "native_name": "Emirados Árabes Unidos",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323301.png",
        },
        {
          "iso_3166_1": "AF",
          "english_name": "Afeganistão",
          "native_name": "Afeganistão",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197515.png"
        },
        {
            "iso_3166_1": "AD",
            "english_name": "Andorra",
            "native_name": "Andorra",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197535.png"
        },
        {
          "iso_3166_1": "AI",
          "english_name": "Anguilla",
          "native_name": "Anguilla",
          "flag": "https://cdn-icons-png.flaticon.com/512/329/329908.png"
        },
        {
            "iso_3166_1": "AL",
            "english_name": "Albânia",
            "native_name": "Albânia",
            "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909330.png"
        },
        {
          "iso_3166_1": "AO",
          "english_name": "Angola",
          "native_name": "Angola",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197513.png"
        },
        {
          "iso_3166_1": "AR",
          "english_name": "Argentina",
          "native_name": "Argentina",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197573.png"
        },
        {
          "iso_3166_1": "AT",
          "english_name": "Austria",
          "native_name": "Áustria",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323321.png"
        },
        {
          "iso_3166_1": "AU",
          "english_name": "Australia",
          "native_name": "Austrália",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323367.png"
          
        },
        {
            "iso_3166_1": "BA",
            "english_name": "Bósnia e Herzegóvina",
            "native_name": "Bósnia e Herzegóvina",
            "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909308.png"
        },
        {
          "iso_3166_1": "BE",
          "english_name": "Belgium",
          "native_name": "Bélgica",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323291.png"
        },
        {
          "iso_3166_1": "BG",
          "english_name": "Bulgaria",
          "native_name": "Bulgária",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197502.png"
        },
        {
          "iso_3166_1": "BO",
          "english_name": "Bolívia",
          "native_name": "Bolívia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197504.png"
        },
        {
          "iso_3166_1": "BR",
          "english_name": "Brazil",
          "native_name": "Brasil",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909370.png"
        },
        {
          "iso_3166_1": "CA",
          "english_name": "Canada",
          "native_name": "Canadá",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323277.png"
        },
        {
          "iso_3166_1": "CH",
          "english_name": "Switzerland",
          "native_name": "Suíça",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197540.png"
        },
        {
          "iso_3166_1": "CI",
          "english_name": "Cote D'Ivoire",
          "native_name": "Costa do Marfim",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323276.png"
        },
        {
            "iso_3166_1": "CL",
            "english_name": "Chile",
            "native_name": "Chile",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197586.png"
        },
        {
            "iso_3166_1": "CO",
            "english_name": "Colômbia",
            "native_name": "Colômbia",
            "flag": "https://cdn-icons-png.flaticon.com/512/323/323343.png"
        },
        {
            "iso_3166_1": "CR",
            "english_name": "Costa Rica",
            "native_name": "Costa Rica",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197506.png"
        },
        {
          "iso_3166_1": "CZ",
          "english_name": "Czech Republic",
          "native_name": "Tchéquia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197576.png"
        },
        {
          "iso_3166_1": "DE",
          "english_name": "Germany",
          "native_name": "Alemanha",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197571.png"
        },
        {
          "iso_3166_1": "DK",
          "english_name": "Denmark",
          "native_name": "Dinamarca",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909156.png"
        },
        {
            "iso_3166_1": "DO",
            "english_name": "República Dominicana",
            "native_name": "República Dominicana",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197619.png"
        },
        {
          "iso_3166_1": "EC",
          "english_name": "Equador",
          "native_name": "Equador",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197588.png"
          
        },
        {
          "iso_3166_1": "EE",
          "english_name": "Estonia",
          "native_name": "Estônia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197379.png"
        },
        {
          "iso_3166_1": "EG",
          "english_name": "Egito",
          "native_name": "Egito",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197558.png"
        },        
        {
          "iso_3166_1": "ES",
          "english_name": "Spain",
          "native_name": "Espanha",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197593.png"
        },
        {
          "iso_3166_1": "FI",
          "english_name": "Finland",
          "native_name": "Finlândia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197585.png"
        },
        {
          "iso_3166_1": "FR",
          "english_name": "France",
          "native_name": "França",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197560.png"
        },
        {
          "iso_3166_1": "GB",
          "english_name": "United Kingdom",
          "native_name": "Reino Unido",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197374.png"
        },
        {
            "iso_3166_1": "GR",
            "english_name": "Grécia",
            "native_name": "Grécia",
            "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909337.png"
        },
        {
            "iso_3166_1": "GT",
            "english_name": "Guatemala",
            "native_name": "Guatemala",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197597.png"
        },        
        {
          "iso_3166_1": "HK",
          "english_name": "Hong Kong",
          "native_name": "Hong Kong, RAE da China",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197570.png"
        },
        {
            "iso_3166_1": "HN",
            "english_name": "Honduras",
            "native_name": "Honduras",
            "flag": "https://cdn-icons-png.flaticon.com/512/323/323311.png"
          },
        {
          "iso_3166_1": "HR",
          "english_name": "Croatia",
          "native_name": "Croácia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197503.png"
        },
        {
          "iso_3166_1": "HU",
          "english_name": "Hungary",
          "native_name": "Hungria",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197584.png"
        },
        {
          "iso_3166_1": "ID",
          "english_name": "Indonesia",
          "native_name": "Indonésia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197559.png"
        },
        {
          "iso_3166_1": "IE",
          "english_name": "Ireland",
          "native_name": "Irlanda",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197567.png"
        },
        {
          "iso_3166_1": "IN",
          "english_name": "India",
          "native_name": "Índia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197419.png"
        },
        {
            "iso_3166_1": "IS",
            "english_name": "Islândia",
            "native_name": "Islândia",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197596.png"
        },
        {
          "iso_3166_1": "IT",
          "english_name": "Italy",
          "native_name": "Itália",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197626.png"
        },
        {
          "iso_3166_1": "JP",
          "english_name": "Japan",
          "native_name": "Japão",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197604.png"
        },
        {
          "iso_3166_1": "KE",
          "english_name": "Kenya",
          "native_name": "Quênia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197608.png"
        },
        {
          "iso_3166_1": "KR",
          "english_name": "South Korea",
          "native_name": "Coreia do Sul",
          "flag": "https://cdn-icons-png.flaticon.com/512/330/330591.png"
        },
        {
            "iso_3166_1": "LI",
            "english_name": "Liechtenstein",
            "native_name": "Liechtenstein",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197420.png"
        },
        {
          "iso_3166_1": "LT",
          "english_name": "Lithuania",
          "native_name": "Lituânia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197612.png"
        },
        {
            "iso_3166_1": "LV",
            "english_name": "Letônia",
            "native_name": "Letônia",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197605.png"
        },
        {
            "iso_3166_1": "MK",
            "english_name": "República da Macedonia",
            "native_name": "República da Macedonia",
            "flag": "https://cdn-icons-png.flaticon.com/512/323/323354.png"
        },
        {
            "iso_3166_1": "MT",
            "english_name": "Malta",
            "native_name": "Malta",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197625.png"
        },        
        {
          "iso_3166_1": "MX",
          "english_name": "Mexico",
          "native_name": "México",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197397.png"
        },
        {
            "iso_3166_1": "MY",
            "english_name": "Malásia",
            "native_name": "Malásia",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197581.png"
          },
        {
          "iso_3166_1": "NL",
          "english_name": "Netherlands",
          "native_name": "Países Baixos",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909207.png"
        },
        {
          "iso_3166_1": "NO",
          "english_name": "Norway",
          "native_name": "Noruega",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197579.png"
        },
        {
          "iso_3166_1": "NZ",
          "english_name": "New Zealand",
          "native_name": "Nova Zelândia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197589.png"
        },
        {
            "iso_3166_1": "PE",
            "english_name": "Peru",
            "native_name": "Peru",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197563.png"
        },
        {
          "iso_3166_1": "PH",
          "english_name": "Philippines",
          "native_name": "Filipinas",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197561.png"
        },
        {
          "iso_3166_1": "PL",
          "english_name": "Poland",
          "native_name": "Polônia",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909420.png"
        },
        {
          "iso_3166_1": "PT",
          "english_name": "Portugal",
          "native_name": "Portugal",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909361.png"
        },
        {
            "iso_3166_1": "PY",
            "english_name": "Paraguai",
            "native_name": "Paraguai",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197376.png"
        },
        {
            "iso_3166_1": "RO",
            "english_name": "Romênia",
            "native_name": "Romênia",
            "flag": "https://cdn-icons-png.flaticon.com/512/323/323296.png"
        },
        {
          "iso_3166_1": "RS",
          "english_name": "Serbia",
          "native_name": "Sérvia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197602.png"
        },
        {
          "iso_3166_1": "RU",
          "english_name": "Russia",
          "native_name": "Rússia",
          "flag": "https://cdn-icons-png.flaticon.com/512/3909/3909301.png"
        },
        {
          "iso_3166_1": "SA",
          "english_name": "Arábia Saudita",
          "native_name": "Arábia Saudita",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197578.png"
        },
        {
          "iso_3166_1": "SE",
          "english_name": "Sweden",
          "native_name": "Suécia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197564.png"
        },
        {
            "iso_3166_1": "SG",
            "english_name": "Singapura",
            "native_name": "Singapura",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197496.png"
        },
        {
            "iso_3166_1": "SI",
            "english_name": "Eslovenia",
            "native_name": "Eslovenia",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197633.png"
        },
        {
          "iso_3166_1": "SK",
          "english_name": "Slovakia",
          "native_name": "Eslováquia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197633.png"
        },
        {
            "iso_3166_1": "SM",
            "english_name": "São Marino",
            "native_name": "São Marino",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197422.png"
        },
        {
            "iso_3166_1": "TH",
            "english_name": "Tailândia",
            "native_name": "Tailândia",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197452.png"
        },
        {
            "iso_3166_1": "TW",
            "english_name": "Taiwan",
            "native_name": "Taiwan",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197557.png"
        },
        {
          "iso_3166_1": "TR",
          "english_name": "Turkey",
          "native_name": "Turquia",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197518.png"
        },
        {
          "iso_3166_1": "US",
          "english_name": "United States of America",
          "native_name": "Estados Unidos",
          "flag": "https://cdn-icons-png.flaticon.com/512/323/323310.png"
        },
        {
            "iso_3166_1": "UY",
            "english_name": "Uruguai",
            "native_name": "Uruguai",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197599.png"
        },
        {
            "iso_3166_1": "VE",
            "english_name": "Venezuela",
            "native_name": "Venezuela",
            "flag": "https://cdn-icons-png.flaticon.com/512/197/197580.png"
        },
        {
          "iso_3166_1": "ZA",
          "english_name": "South Africa",
          "native_name": "África do Sul",
          "flag": "https://cdn-icons-png.flaticon.com/512/197/197562.png"
        }
      ]

    const returnRegion = (countyID:string) => {
      const locale = locations.filter(({iso_3166_1}) => iso_3166_1 === countyID ); 
      ///console.log(countyID)   
      if(locale[0]){
          return {
            location:locale[0].native_name,
            flag:locale[0].flag,
          }
      }else{
          return {
            location:countyID,
            flag:'https://cdn-icons-png.flaticon.com/512/610/610381.png',
          }
      }
    
    }

  return (
   <>
    {Object.keys(providers).map((region:string,index:number) => (
                <div key={index}>
                <div   className={styles.providers}>
                    <h4>{region && returnRegion(region).location}</h4>
                    <div className={styles.flag}>
                      <Image 
                        key={index}
                        src={region && returnRegion(region).flag}
                        height={250}
                        width={250}
                        alt={`Bandeira ${region}`}
                        onClick={() => activeLocation !== region ? setActiveLocation(region) : setActiveLocation('')}
                      />
                    </div>        
                </div>
                <div className={styles.divProviders} style={region ===  activeLocation ? {maxHeight:'50em'} : {maxHeight:'0'}}>
                      <h4>Stream</h4>                    
                      <div className={styles.listProviders}>
                          {!providers[region].flatrate ? <p>Não disponível</p> : providers[region].flatrate.map((provider:ProviderProps,index:number) =>(
                              <Image 
                                  key={index}
                                  src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                                  height={50}
                                  width={50}
                                  alt={provider.provider_name}
                              />
                          )) }  
                      </div>
                      <h4>Alugar</h4>
                      <div className={styles.listProviders}>
                          {!providers[region].rent ? <p>Não disponível</p> : providers[region].rent.map((provider:ProviderProps,index:number) =>(
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
                          {!providers[region].buy ? <p>Não disponível</p> : providers[region].buy.map((provider:ProviderProps,index:number) =>(
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
                </div>
              ))}
   </>
  )
}
