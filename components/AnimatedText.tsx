"use client"; // App Router 환경에서 클라이언트 컴포넌트로 사용 시 필요

import { useState, useEffect } from "react";

export default function AnimatedText() {
  const words = ["앱개발", "웹 디자인"]; // 순환할 단어 목록
  const [text, setText] = useState(""); // 현재 타이핑된 글자
  const [wordIndex, setWordIndex] = useState(0); // 현재 단어 인덱스
  const [charIndex, setCharIndex] = useState(0); // 현재 글자 인덱스
  const [isDeleting, setIsDeleting] = useState(false); // 현재 글자를 지우는 중인지 여부

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // 글자 찍는 중
      timer = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (isDeleting && charIndex > 0) {
      // 글자 지우는 중
      timer = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // 단어를 전부 찍었다면 잠시 멈춤
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && charIndex === 0) {
      // 글자를 전부 지웠다면 다음 단어로 넘어감
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    // blinking cursor를 표현하기 위해 border-right 등을 활용할 수 있음
    <span className="border-r-2 border-gray-600 pr-1">{text}</span>
  );
}
