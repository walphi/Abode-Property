import React, { useState, useCallback } from 'react';
import { SlideData } from './types';
import Slide from './components/Slide';
import Navigation from './components/Navigation';

const slideDeckData: SlideData[] = [
  {
    id: 1,
    layout: 'title',
    backgroundImage: 'https://images.unsplash.com/photo-1758799073949-0547a39c12f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '6-Month AI Growth & Strategy Consultancy: Engineering Scalable Success',
    preparedFor: 'Prepared for Mark Tolland, Managing Director, Abode Property',
    preparedBy: 'Prepared by Phillip Walsh',
  },
  {
    id: 2,
    layout: 'index',
    title: 'Index',
    listItems: [
      'Overview',
      'Mandate & Objective',
      'Scope of Work & Deliverables (3-Phase Plan)',
      'Value Proposition',
      'Investment & Payment',
      'Next Steps & Relationship',
      'Agreement & Acceptance',
    ],
  },
  {
    id: 3,
    layout: 'overview',
    backgroundImage: 'https://images.unsplash.com/photo-1754923259817-43e785410262?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Overview',
    content: [
      "This proposal outlines a comprehensive digital marketing consultancy focused on generating high-quality, pre-qualified property leads for Abode Property.",
      "The primary aim of this engagement is to elevate Abode's digital presence and transform its marketing function from a research-and-development team into a scalable, automated, and AI-first lead generation system. By leveraging cutting-edge technology and data-driven strategies, we will establish a repeatable model for success that can sustain long-term growth.",
    ]
  },
  {
    id: 4,
    layout: 'section_header',
    title: 'Mandate & Objective',
    content: [
      "The objective of this 6-month engagement is to transform the Client’s marketing function from an R&D-focused cost center into a scalable, automated, and AI-first lead generation system that can successfully reverse-engineer Mark’s personal success into a company-wide, repeatable model.",
      "The ultimate goal is to establish the strategic framework, technology stack, and initial talent structure required to rapidly and efficiently scale the business volume beyond its current reliance on the owner's personal network.",
    ]
  },
  {
    id: 5,
    layout: 'phase_detail',
    backgroundImage: 'https://images.unsplash.com/photo-1758819015497-37f2494a81ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Scope of Work & Deliverables',
    phase: {
      number: 'I',
      title: 'Audit & Strategy Blueprint',
      duration: 'Month 1',
      focus: 'Operational Leadership & Performance Fluency',
      deliverables: [
        'Comprehensive Audit: Review and analysis of the current team (Harsh & team), existing tech stack (Lead Squared, GitHub, AI tools), and marketing data.',
        '"System Engineering" Blueprint: A strategic plan detailing the recommended AI-first tech stack, updated performance metrics (CAC, ROAS, LTV), and a 6-month roadmap for implementation.'
      ]
    }
  },
  {
    id: 6,
    layout: 'phase_detail',
    backgroundImage: 'https://images.unsplash.com/photo-1758819015497-37f2494a81ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Scope of Work & Deliverables',
     phase: {
      number: 'II',
      title: 'System Build & Automation',
      duration: 'Months 2-4',
      focus: 'AI + Automation Mastery & Growth & Funnel Strategy',
      deliverables: [
        'AI-Powered Funnel Deployment: Implementation and testing of 1-2 new, fully automated lead qualification funnels (e.g., WhatsApp/AI Chatbot campaigns) targeting the desired POA/exclusive client profile.',
        'Data Backbone: Establish clear attribution tracking and reporting dashboards to measure ROI on all campaigns.',
        'Initial Team Upskilling: Begin training key personnel on new AI tools and performance metrics.'
      ]
    }
  },
  {
    id: 7,
    layout: 'phase_detail',
    backgroundImage: 'https://images.unsplash.com/photo-1758819015497-37f2494a81ff?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Scope of Work & Deliverables',
    phase: {
      number: 'III',
      title: 'Prestige & Scaling Architecture',
      duration: 'Months 5-6',
      focus: 'Brand Storytelling, Social Media Culture Awareness, International Awareness',
      deliverables: [
        'Prestige Content Framework: Design a strategy for short-form content (Reels/TikTok) that elevates the brand to "category of one" status, focusing on status marketing and luxury positioning.',
        'Final Implementation Plan: Documented strategy for full-scale team hiring/re-alignment and handover of the new, proven systems for sustained growth.'
      ]
    }
  },
  {
    id: 8,
    layout: 'section_header',
    title: 'Value Proposition',
    content: [
      'The Consultant commits to:',
      'Providing executive-level strategic direction and a minimum of 40 hours per month of dedicated consultation, strategy sessions, and remote oversight.',
      'Serving as the Fractional Head of Marketing/Growth Engineer during the engagement, collaborating directly with Mark and providing oversight for the technology and marketing teams.',
      "Leveraging cutting-edge AI/Automation tools and methodologies, as demonstrated in our discussion, to achieve the Client's goals.",
      'This consultancy structure provides the immediate, high-impact expertise needed to build the desired system without the risks and costs associated with a full-time, long-term hire from day one.'
    ]
  },
  {
    id: 9,
    layout: 'simple_dark',
    title: 'Investment & Payment Terms',
    content: [
      'Monthly Retainer: AED 39,950',
      'Payment Schedule: The monthly retainer is payable in advance on the first day of each month.',
    ]
  },
  {
    id: 10,
    layout: 'section_header',
    title: 'Next Steps & Relationship',
    content: [
      "At the conclusion of the 6-month term, the parties will jointly assess the performance of the new systems. This may lead to a subsequent agreement, which could include:",
      "Extension of the consultancy for further strategic projects.",
      "Transition into a permanent CMO/Director role, at which point a negotiated transition fee would be paid, contingent on any arrangements with the recruitment agency."
    ]
  },
  {
    id: 11,
    layout: 'agreement',
    title: 'Agreement & Acceptance',
    agreementDetails: {
      text: "By signing below, the parties agree to the terms outlined in this 6-month consultancy proposal.",
      preparedBy: 'Phillip Walsh',
      acceptedBy: 'Mark Tolland, Managing Director, Abode Property',
      date: `Date: ${new Date().toLocaleDateString('en-GB')}`
    }
  },
  {
    id: 12,
    layout: 'thank_you',
    backgroundImage: 'https://picsum.photos/seed/final/1920/1080',
    title: 'Thank you.'
  }
];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideDeckData.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideDeckData.length) % slideDeckData.length);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <Navigation
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        current={currentSlide + 1}
        total={slideDeckData.length}
      />
      <div className="w-full h-full">
        {slideDeckData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Slide data={slide} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;