// app/about/page.js
import React from 'react';
import AboutContent from './components/aboutCompany';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
     <AboutContent/>
    </main>
  );
}