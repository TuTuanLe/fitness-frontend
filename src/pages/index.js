import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css';
import { fetch_project } from '../Services/Reducers/projectSlice';

export default function Home() {
  const tst = useSelector((state) => state.project.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_project());
  }, [dispatch]);
  console.log(tst);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          {tst.map((item, index) => {
            return (
              <div key={index}>
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </h1>
      </main>
    </div>
  );
}
