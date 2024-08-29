create database bills
create table if not EXISTS `bill`(
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `bill_number` varchar(30) UNIQUE,
    `customer_id` varchar(30),
    `bill_date` varchar(10),
    `amount` int,
    `status` varchar(30),
    `payment_due_date` varchar(20),
    `payment_method` varchar(30)
)
insert into bill(bill_number,customer_id,bill_date,amount,status,payment_due_date,payment_method) values('b10001','C0001','2024-01-23',100000,'completed','2024-02-20','online')
insert into bill(bill_number,customer_id,bill_date,amount,status,payment_due_date,payment_method) values('b10002','C0002','2024-02-24',100000,'due','2024-03-21','cash')