'use client';
import React, { useEffect } from 'react';

const KeyResultsWithTextBlock = ({ data }) => {
  const { title, leftContent, rightContent } = data;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
      <div className="grid grid-cols-[400px_1fr] gap-8">
        <div className="relative">
          <div className="sticky top-128">
            <div className="bg-gray-50 p-8 rounded-lg mb-4">
              <h3 className="text-xl font-bold mb-4">目录</h3>
              <ul className="space-y-2">
                {rightContent.map((content, index) => (
                  <li key={`toc-${index}`}>
                    <button
                      onClick={() => scrollToSection(`section-${index}`)}
                      className="text-gray-600 hover:text-blue-600 text-sm text-left"
                    >
                      {content.contentTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Key Results</h3>
              {leftContent
                .filter(result => result.display)
                .map((result, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {result.percentage}%
                    </div>
                    <p className="text-sm text-gray-600">
                      {result.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <header className="header">
            <div className="max-w-4xl pr-4">
              <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 leading-tight">
                {title}
              </h2>
            </div>
          </header>

          <main className="main-content mt-8">
            <article className="article max-w-4xl pr-4">
              {rightContent.map((content, index) => (
                <div key={index} className="mb-10 last:mb-0" id={`section-${index}`}>
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
                    {content.contentTitle}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                    {content.contentText}
                  </p>
                </div>
              ))}
            </article>            
          </main>
        </div>
      </div>
    </div>
  );
};

export default KeyResultsWithTextBlock;