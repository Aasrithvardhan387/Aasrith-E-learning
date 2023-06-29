import { CourseRepositoryMongoDbInterface } from '@src/frameworks/database/mongodb/repositories/courseReposMongoDb';
import { AddCourseInfoInterface } from '@src/types/instructor/courseInterface';
import { AddQuizInfoInterface } from '@src/types/instructor/courseInterface';

export const courseDbRepository = (
  repository: ReturnType<CourseRepositoryMongoDbInterface>
) => {
  const addCourse = async (courseInfo: AddCourseInfoInterface) =>
    await repository.addCourse(courseInfo);
  
  const addQuiz = async (courseId:string,quiz:AddQuizInfoInterface)=>await repository.addQuiz(courseId,quiz)

  const getAllCourse = async ()=> await repository.getAllCourse()

  const getCourseById = async (courseId:string) => await repository.getCourseById(courseId)

  const getCourseByInstructorId = async (instructorId:string) => await repository.getCourseByInstructorId(instructorId)

  return {
    addCourse,
    addQuiz,
    getAllCourse,
    getCourseById,
    getCourseByInstructorId
  };
};
export type CourseDbRepositoryInterface = typeof courseDbRepository;
