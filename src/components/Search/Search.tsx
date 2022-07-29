import { useRouter } from 'next/router';
import React, { FormEvent, useState} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import styles from '../../styles/Home.module.scss'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState('');   

    const router = useRouter();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${searchQuery}`)
        setSearchQuery('');
    }
  return (
    <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
              type="text" 
              name='search'
              placeholder='Digite o nome do filme ou série que esteja procurando' 
              autoComplete='off'
              required={true}
              value={searchQuery}  
              onChange={(e) => setSearchQuery(e.target.value)}         
            />
            <button type='submit'><AiOutlineSearch /></button>
          </label>
          
        </form>
      </div>
  )
}
