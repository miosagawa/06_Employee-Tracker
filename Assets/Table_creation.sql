DROP DATABASE IF EXISTS databaseDB;
CREATE DATABASE databaseDB;
USE databaseDB;


-- table読み込み
--1.department
    -- id:INT PRIMARY KEY
    -- 名前:部門名を保持するVARCHAR（30）
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);
INSERT INTO department (name)
VALUES ("strategy");
INSERT INTO department (name)
VALUES ("consulting");
INSERT INTO department (name)
VALUES ("Digital");
INSERT INTO department (name)
VALUES ("technology");
INSERT INTO department (name)
VALUES ("operation");


-- 2.role
    -- id:INT PRIMARY KEY
    -- title:役割のタイトルを保持するVARCHAR（30）
    -- 給与:役割の給与を保持するDECIMAL
    -- department_id:所属する部門の役割への参照を保持するINT
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);
INSERT INTO role (title,salary,department_id)
VALUES ("Managing Director","30000000",1);
INSERT INTO role (title,salary,department_id)
VALUES ("Senior manager","15000000",1);
INSERT INTO role (title,salary,department_id)
VALUES ("manager","10000000",1);
INSERT INTO role (title,salary,department_id)
VALUES ("consultant","8000000",1);
INSERT INTO role (title,salary,department_id)
VALUES ("Analyst","6000000",1);

INSERT INTO role (title,salary,department_id)
VALUES ("Managing Director","30000000",2);
INSERT INTO role (title,salary,department_id)
VALUES ("Senior manager","15000000",2);
INSERT INTO role (title,salary,department_id)
VALUES ("manager","10000000",2);
INSERT INTO role (title,salary,department_id)
VALUES ("consultant","8000000",2);
INSERT INTO role (title,salary,department_id)
VALUES ("Analyst","6000000",2);

INSERT INTO role (title,salary,department_id)
VALUES ("Managing Director","30000000",3);
INSERT INTO role (title,salary,department_id)
VALUES ("Senior manager","15000000",3);
INSERT INTO role (title,salary,department_id)
VALUES ("manager","10000000",3);
INSERT INTO role (title,salary,department_id)
VALUES ("consultant","8000000",3);
INSERT INTO role (title,salary,department_id)
VALUES ("Analyst","6000000",3);

INSERT INTO role (title,salary,department_id)
VALUES ("Managing Director","30000000",4);
INSERT INTO role (title,salary,department_id)
VALUES ("Senior manager","15000000",4);
INSERT INTO role (title,salary,department_id)
VALUES ("manager","10000000",4);
INSERT INTO role (title,salary,department_id)
VALUES ("consultant","8000000",4);
INSERT INTO role (title,salary,department_id)
VALUES ("Analyst","6000000",4);

INSERT INTO role (title,salary,department_id)
VALUES ("Managing Director","30000000",5);
INSERT INTO role (title,salary,department_id)
VALUES ("Senior manager","15000000",5);
INSERT INTO role (title,salary,department_id)
VALUES ("manager","10000000",5);
INSERT INTO role (title,salary,department_id)
VALUES ("consultant","8000000",5);
INSERT INTO role (title,salary,department_id)
VALUES ("Analyst","6000000",5);

-- 3.employee
    -- id:INT PRIMARY KEY
    -- first_name:従業員の名を保持するVARCHAR（30）
    -- last_name:従業員の姓を保持するVARCHAR（30）
    -- role_id:従業員が持つ役割への参照を保持するINT
    -- manager_id:現在の従業員のマネージャーである別の従業員への参照を保持するINT。従業員にマネージャーがいない場合、このフィールドはnullになることがあります。

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Mio","Sagawa",1,2);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Sayaka","Tanaka",3,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Yuko","Yamada",2,5);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Takashi","Kawano",2,5);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Toshi","Shimada",3,4);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Kohei","Nakano",3,2);


