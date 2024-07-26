import React from "react";
import { useParams } from "react-router-dom";
import lessons from "/src/components/LessonData.jsx"; 

const LessonDetail = () => {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === parseInt(id));

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
        <p className="text-gray-700 mb-6">{lesson.content}</p>
        {lesson.videoUrl && (
          <div className="mb-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dz458ZkBMak?si=9m5A_qLzRBR3f8EI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;
