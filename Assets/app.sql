
-- 存在すればDBを削除
DROP DATABASE IF EXISTS databaseDB;

-- DBを作成する
CREATE DATABASE databaseDB;

-- DBを使用
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
-- INSERT INTO department (name)
-- VALUES ("Human");


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
-- INSERT INTO role (title,salary,department_id)
-- VALUES ("Human");

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
-- INSERT INTO employee (first_name,last_name,role_id,manager_id)
-- VALUES ("Human");


