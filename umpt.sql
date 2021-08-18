create database if not exists umpt;
use umpt;

create table if not exists user(
    id_user          int,
    firstname_user   varchar(255),
    lastname_user    varchar(255),
    mail_user        varchar(255),
    birth_date_user  varchar(255),
    password_user    varchar(255),
    is_mentor_user   bool,
    is_mentore_user  bool,
    objectives_user  text
);

create table if not exists competence (
    id_competence   int,
    name_competence varchar(255)
);

create table if not exists user_competence (
    fk_id_user         int,
    fk_id_competence   int
);

create table if not exists objective (
    id_objective    int,
    name_objective  varchar(255)
);

create table if not exists user_objective (
    fk_id_user      int, 
    fk_id_objective varchar(255)
);

create table if not exists contract (
    id_contract                         int,
    estimated_sessions_number           int,
    estimated_mentorat_days_duration    int,
    estimated_remaining_sessions        int,
    common_objectives                   text,
        fk_id_mentor                        int,
        fk_id_user_mentore                  int
);

create table if not exists session (
    id_session          int,
    date_session        date,
    time_session        timestamp,
    objectives_session  text,
    report_session      text,
        fk_id_contrat       int
);

create table if not exists working_corp (
    id_working_corp     int,
    name_working_corp   varchar(255)
);
