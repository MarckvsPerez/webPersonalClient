import React, { useState, useEffect } from "react";
import { size, map } from "lodash";
import { Loader, Pagination } from "semantic-ui-react";
import { Courses } from "../../../../api";
import { CourseItem } from "../CourseItem";
import "./ListCourse.scss";

const courseController = new Courses();

export function ListCourses(props) {
  const { reload, onReload } = props;
  const [courses, setCourses] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ page, limit: 5 });
        setCourses(response.docs);
        setPagination({
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page, reload]);

  const changePage = (_, data) => {
    setPage(data.activePage);
  };

  if (!courses) return <Loader active inline="centered" />;
  if (size(courses) === 0) return "No hay cursos creados";

  return (
    <div className="list-courses">
      {map(courses, (course) => (
        <CourseItem key={course._id} course={course} onReload={onReload} />
      ))}

      <div className="list-courses__pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
