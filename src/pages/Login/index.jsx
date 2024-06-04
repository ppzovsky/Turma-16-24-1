import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function addCount() {
    setCount(count => count + 1);
  }

  function login() {
    navigate('../enemyShop');
  }

  useEffect(() => {
    console.log(password);
    console.log(email);
  }, [count]);

  return <div className={styles.container}>
    <div className={styles.card}>
      <Input onChange={e => setEmail(e.target.value)} title='Email' />
      <Input onChange={e => setPassword(e.target.value)} title={'Senha'} placeholder='****' />
      <div className={styles.buttonsContainers}>
        <Button
          title={'Login'}
          onClick={login}
        />
        <Button
          title={'Add count'}
          onClick={addCount}
        />
      </div>
      <Link to={'/enemyShop'}>Link</Link>
      <h1>
        {count}
      </h1>
    </div>
  </div>
};