INSERT INTO `roles` VALUES (1,'ROLE_ADMIN') ON DUPLICATE KEY UPDATE ROLE = 'ROLE_ADMIN';
INSERT INTO `roles` VALUES (2,'ROLE_USER') ON DUPLICATE KEY UPDATE ROLE = 'ROLE_USER';


INSERT INTO `tbusuario` (`id`, `created_at`, `email`, `foto`, `nome`, `password`, `updated_at`, `user_name`) VALUES
(1, '2020-12-01', 'admin@localhost', 'teste', 'Marco','$2a$10$A5c6LmhsiFydP7IKJ3QIcu433x2Ow5Q.Jgw8GmgJ4q1freC/eyOO6', '2020-12-01', 'Marco')
    ON DUPLICATE KEY UPDATE user_name = 'Marco';

INSERT INTO `tbusuario` (`id`, `created_at`, `email`, `foto`, `nome`, `password`, `updated_at`, `user_name`) VALUES
(2, '2020-12-01', 'admin@localhost', 'teste', 'Fillipe','$2a$10$A5c6LmhsiFydP7IKJ3QIcu433x2Ow5Q.Jgw8GmgJ4q1freC/eyOO6', '2020-12-01', 'Fillipe')
    ON DUPLICATE KEY UPDATE user_name = 'Fillipe';
    
INSERT INTO `user_role` (`usuario_id`, `role_id`) VALUES ('1', '1') ON DUPLICATE KEY UPDATE role_id = '1';
INSERT INTO `user_role` (`usuario_id`, `role_id`) VALUES ('2', '2') ON DUPLICATE KEY UPDATE role_id = '2';
    

