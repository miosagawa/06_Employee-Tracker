# Unit 12 MySQL Homework: Employee Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Instructions

Design the following database schema containing three tables:

![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

Bonus points if you're able to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

We can frame this challenge as follows:

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

How do you deliver this? Here are some guidelines:

* Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

* You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

* You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

![Employee Tracker](Assets/employee-tracker.gif)

### Hints

* You may wish to include a `seed.sql` file to pre-populate your database. This will make development of individual features much easier.

* Focus on getting the basic functionality completed before working on more advanced features.

* Review the week's activities for a refresher on MySQL.

* Check out [SQL Bolt](https://sqlbolt.com/) for some extra MySQL help.

## Minimum Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* The command-line application should allow users to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

## Bonus

* The command-line application should allow users to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* The URL of the GitHub repository

* A video demonstrating the entirety of the app's functionality 

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.





##手順

3つのテーブルを含む次のデータベーススキーマを設計します。

！[データベーススキーマ]（Assets / schema.png）

* **部門**：

  * ** id **-INT PRIMARY KEY
  * **名前**-部門名を保持するVARCHAR（30）

* **ロール**：

  * ** id **-INT PRIMARY KEY
  * ** title **-役割のタイトルを保持するVARCHAR（30）
  * **給与**-役割の給与を保持するDECIMAL
  * ** department_id **-所属する部門の役割への参照を保持するINT

* **従業員**：

  * ** id **-INT PRIMARY KEY
  * ** first_name **-従業員の名を保持するVARCHAR（30）
  * ** last_name **-従業員の姓を保持するVARCHAR（30）
  * ** role_id **-従業員が持つ役割への参照を保持するINT
  * ** manager_id **-現在の従業員のマネージャーである別の従業員への参照を保持するINT。従業員にマネージャーがいない場合、このフィールドはnullになることがあります。
  
少なくともユーザーが以下を実行できるコマンドラインアプリケーションを構築します。

  *部門、役割、従業員を追加する

  *部門、役割、従業員を表示する

  *従業員の役割を更新する

次のことができる場合のボーナスポイント：

  *従業員のマネージャーを更新する

  *マネージャー別に従業員を表示

  *部門、役割、従業員を削除する

  *部門の総利用予算を表示します-つまり、その部門の全従業員の合計給与

この課題を次のようにまとめることができます。

「」
事業主として
会社の部門、役割、従業員を表示および管理できるようにしたい
ビジネスを整理して計画できるように
「」

これをどのように提供しますか？ここにいくつかのガイドラインがあります：

* [MySQL]（https://www.npmjs.com/package/mysql）NPMパッケージを使用して、MySQLデータベースに接続し、クエリを実行します。

* [InquirerJs]（https://www.npmjs.com/package/inquirer/v/0.2.3）NPMパッケージを使用して、コマンドライン経由でユーザーと対話します。

* [console.table]（https://www.npmjs.com/package/console.table）を使用して、MySQL行をコンソールに出力します。 `console.table`の組み込みバージョンがありますが、NPMパッケージは目的に合わせてデータを少し適切にフォーマットします。

*使用する必要がある特定のSQLクエリを実行するための関数を含む別のファイルが必要になる場合があります。コンストラクタ関数またはクラスは、これらを整理するのに役立ちますか？

*この割り当てを完了するには、さまざまなSQL JOINSを実行する必要があります。これについて復習が必要な場合は、その週のアクティビティを確認することをお勧めします。

！[従業員トラッカー]（Assets / employee-tracker.gif）

＃＃＃ ヒント

*データベースに事前入力するために、 `seed.sql`ファイルを含めることができます。これにより、個々の機能の開発がはるかに簡単になります。

*より高度な機能に取り組む前に、基本的な機能を完成させることに焦点を当てます。

* MySQLの復習のための1週間のアクティビティを確認します。

*追加のMySQLヘルプについては、[SQLボルト]（https://sqlbolt.com/）を確認してください。

##最小要件

*機能アプリケーション。

*一意の名前とプロジェクトを説明するREADMEを持つGitHubリポジトリ。

*コマンドラインアプリケーションでは、ユーザーは次のことを実行できます。

  *部門、役割、従業員を追加する

  *部門、役割、従業員を表示する

  *従業員の役割を更新する

##ボーナス

*コマンドラインアプリケーションでは、ユーザーは次のことを実行できます。

  *従業員のマネージャーを更新する

  *マネージャー別に従業員を表示

  *部門、役割、従業員を削除する

  *部門の総利用予算を表示します-つまり、その部門の全従業員の合計給与

##早い段階で頻繁にコミットする

Web開発者として習得する最も重要なスキルの1つは、バージョン管理です。 Gitを介してコミットする習慣をつけることは、2つの理由で重要です。

*コミット履歴は、プロジェクトに積極的に取り組み、新しいスキルを習得していることを雇用主に知らせるものです。

*コミット履歴により、以前の状態に戻す必要がある場合にコードベースを元に戻すことができます。

コミットするには、次のガイドラインに従ってください。

*関連する変更に対して単一目的のコミットを作成して、クリーンで管理可能な履歴を確保します。 2つの問題を修正する場合は、2つのコミットを行います。

*説明的で意味のあるコミットメッセージを作成して、リポジトリを閲覧しているあなたや他の誰もが簡単にその履歴を理解できるようにします。

*共同作業者（およびあなたの将来の自己）のために、半完成の作業を行わないでください。

*コミットする前にアプリケーションをテストして、開発プロセスのすべてのステップで機能を確認します。

卒業までに200件を超えるコミットをしていただきたいので、早い段階で頻繁にコミットしてください。


## BCSでの提出

以下を提出する必要があります。

* GitHubリポジトリのURL

*アプリの機能全体を紹介するビデオ
