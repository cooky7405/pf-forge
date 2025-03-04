"use client";
import React from "react";

export default function ServiceInfo() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      {/* 큰 제목, 작은 제목 */}
      <h1 className="text-3xl font-bold text-center mb-2">서비스 소개</h1>
      <h2 className="text-xl text-center text-gray-700 mb-8">
        서비스 관리 및 유지 보수
      </h2>

      {/* 단계(1~5) 컨테이너 */}
      <div className="flex items-center justify-center space-x-4">
        {/* === Step 1 === */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <p className="mt-2 text-center text-sm">
            단위프로젝트 <br />
            개발 및 인프라 관리
          </p>
        </div>

        {/* 점선 라인 */}
        <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>

        {/* === Step 2 === */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <p className="mt-2 text-center text-sm">배포 계획 수립</p>
        </div>

        {/* 점선 라인 */}
        <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>

        {/* === Step 3 === */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <p className="mt-2 text-center text-sm">
            서비스 모니터링
            <br />및 로그 관리
          </p>
        </div>

        {/* 점선 라인 */}
        <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>

        {/* === Step 4 === */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            4
          </div>
          <p className="mt-2 text-center text-sm">
            에러 모니터링
            <br />및 이슈 처리
          </p>
        </div>

        {/* 점선 라인 */}
        <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>

        {/* === Step 5 === */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            5
          </div>
          <p className="mt-2 text-center text-sm">
            버전관리
            <br />및 배포 자동화
          </p>
        </div>
      </div>

      {/* 버전 정보 등 하단 설명이 필요하다면 추가 */}
      <div className="mt-8 text-sm text-gray-600 text-center">
        Version 1.0 | Last Updated 2023-03-01
      </div>
    </div>
  );
}
