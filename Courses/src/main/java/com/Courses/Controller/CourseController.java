package com.Courses.Controller;

import com.Courses.Dao.CourseRepository;
import com.Courses.Model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CourseController {

    @Autowired
    private CourseRepository repository;

    @GetMapping("/home")
    public String home(){
        return "Welcome to courses application";
    }

    @GetMapping("/courses")
    public List<Course> getCourses(){
        return repository.findAll();
    }

    @GetMapping("/courses/{id}")
    public Course getCourse(@PathVariable int id){
        return repository.findById(id).orElse(null);
    }

    @PostMapping("/courses")
    public Course addCourse(@RequestBody Course course){
        return repository.save(course);
    }

    @PutMapping("/courses")
    public String updateCourse(@RequestBody Course course){
            repository.save(course);
            return "Course Updated";
    }

    @DeleteMapping("/courses/{id}")
    public String deleteCourse(@PathVariable int id){
        repository.deleteById(id);
        return "Course Deleted";
    }
}
