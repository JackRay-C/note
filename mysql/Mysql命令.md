---
title: 常用mysql命令
---


1、登录命令

```sql
mysql -u$user -H $host -P $port -p$password
```

2、创建用户

```sql
create user $user identified by $password;
```

3、授权用户数据库

```sql
# 授予数据库全部的操作权限
grant all privileges on $database.* to $user@'locahost';
# 授予全部数据库权限
grant all on *.* to $user@'localhost';

# 授予创建表的权限
grant select on $database.* to $user@'localhost';
# 授予修改表结构的权限
grant alter on $database.* to $user@'localhost';
# 授予删除数据表权限
grant drop on $database.* to $user@'locahost';

# 授予操作mysql外键权限
grant references on $database.* to $user@'localhost';
# 授予操作mysql临时表权限
grant create temporary tables on $database.* to $user@'localhost';
# 授予操作mysql索引权限
grant index on $database.* to $user@'localhost';
# 授予操作mysql视图、查看视图源代码权限
grant create view on $database.* to $user@'localhost';
grant show view on $database.* to $user@'localhost';

# 授予操作mysql存储过程、函数权限
grant create routine on $database.* to $user@'localhost';
grant alter routine on $database.* to $user@'localhost';
grant execute on $database.* to $user@'localhost';



# 授予用户授权的权限
grant all on $database.* to $user@'localhost' with grant option;

# 撤销授予的权限
revoke all on *.* to $user@'localhost';
```