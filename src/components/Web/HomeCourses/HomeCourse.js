import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Courses } from "../../../api";
import { ENV } from "../../../utils";
import "./HomeCourse.scss";

const courseController = new Courses();

export function HomeCourse() {
  const [courses, setcourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ limit: 6 });
        setcourses(response.docs);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Container className="home-courses">
      <h2>Aprende y mejora tus habilidades</h2>

      <div className="home-courses__all-courses">
        {map(courses, (course) => (
          <a
            key={course._id}
            href={course.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={`${ENV.BASE_PATH}/${course.miniature}`} />

            <div>
              <span> {course.title}</span>
              <span>{course.description}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="home-courses__more">
        <Button as={Link} to="/courses" primary>
          Ver más
        </Button>
      </div>
    </Container>
  );
}
