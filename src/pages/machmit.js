import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


export default function MachMit() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Mach mit!<head />">
      <main className='main-machmit'>
        <div class='machmit'>
            <h1 className='machmit-headline'>Mach mit </h1>
            <h2>Auch du kannst Teil einer demokratischen Bewegung für deinen Kiez sein. Es ist ganz einfach!</h2>
            <div className='machmit-list'>
              <div>
                  <h2>Schreib uns an</h2>
                  {/* // TODO: Add Email */}
                  <a aria-label="Chat auf WhatsApp" target="_blank" href="https://wa.me/491772902562"><img alt="Chat on WhatsApp" src="/img/WhatsAppButtonWhiteLarge.svg" /></a>
              </div>
              <div>
                  <h2>Komm vorbei</h2>
                  <a href='/docs/wir/aktuelles' className='machmit-a'>
                      <img className='machmit-img' src='/img/SPD_Hand_5_weiss-frei_RGB.png'></img>    
                  </a>
              </div>
              <div>
                  <h2>Folg' uns</h2>
                  <a href='https://www.instagram.com/spdberlin_alex/' target="_blank" className='machmit-a'>
                      <img className='machmit-img' src='/img/SPD_Instagram_weiss-frei_RGB.png'></img>
                  </a>
              </div>
            </div>
        </div>
      </main>
    </Layout>
  );
}
