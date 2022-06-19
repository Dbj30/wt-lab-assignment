        Assignment Date - Sun June 19/22 - Mon June 19/22

### Table Of Contents
- [Getting Started With Xaamp ,Php](#getting-started-with-xaamp-php)
  - [What is XAMPP?](#what-is-xampp)
  - [What is: Apache](#what-is-apache)
  - [What is Virtual Host?](#what-is-virtual-host)
  - [Creating a Virtual Hosts](#creating-a-virtual-hosts)
    - [Update XAMP Virtual Host File](#update-xamp-virtual-host-file)
    - [Update your Window Host File](#update-your-window-host-file)

# Getting Started With Xaamp ,Php

## What is XAMPP?
XAMPP is an abbreviation where X stands for Cross-Platform, A stands for Apache, M stands for MYSQL, and the Ps stand for PHP and Perl, respectively. It is an open-source package of web solutions that includes Apache distribution for many servers and command-line executables along with modules such as Apache server, MariaDB, PHP, and Perl.

XAMPP helps a local host or server to test its website and clients via computers and laptops before releasing it to the main server. It is a platform that furnishes a suitable environment to test and verify the working of projects based on Apache, Perl, MySQL database, and PHP through the system of the host itself. Among these technologies, Perl is a programming language used for web development, PHP is a backend scripting language, and MariaDB is the most vividly used database developed by MySQL. The detailed description of these components is given below.

## What is: Apache
Apache is the most widely used webserver software and runs on 67% of all websites in the world. Developed and maintained by Apache Software Foundation, Apache is open source software and available for free.

It’s fast, reliable, and secure. And Apache can be highly customized to meet the needs of many different environments by using extensions and modules.

## What is Virtual Host?
An Apache web server can host multiple websites on the SAME server. You do not need separate server machine and apache software for each website. This can achieved using the concept of Virtual Host or VHost.

Any domain that you want to host on your web server will have a separate entry in apache configuration file.



## Creating a Virtual Hosts

 Current url for ./project1 and ./project2 are 

- http://localhost/GITHUB/Web%20Technology/Assignments/Assignment%207/project1
- <http://localhost/GITHUB/Web%20Technology/Assignments/Assignment%207/project/>

But What if we can shorten to a costom domain like
- http://project1.local
- http://project2.local

### Update XAMP Virtual Host File

 Find path to xaamp and  `C:\xampp\apache\conf\extra` and open filename 
`httpd-vhosts.conf` and Change DocumentRoot and ServerName accordingly

 ```CONF
 <VirtualHost *:80>
    DocumentRoot "C:\xampp\htdocs\GITHUB\Web Technology\Assignments\Assignment 7\project1
"
    ServerName project1.local
</VirtualHost>
<VirtualHost *:80>
    DocumentRoot "C:\xampp\htdocs\GITHUB\Web Technology\Assignments\Assignment 7\project2
"
    ServerName project2.local
</VirtualHost>
 
 ```

 Correctly enter the document root because the typos can create problems .Give a unique name for the specific project you are working on it can be any thing like paypal.local .... ... 
 and Append the code as per your projects .

### Update your Window Host File

==Note : Make sure to duplicate the host file in any seperate location :==


 Go to path `C:\Windows\System32\drivers\etc` to edit `host` file  

            
==note : Your system cannot allow yo to edit directly there so make sure that you copy it to different location and have an extra original copy in any case==
            
Lets edit : Here put the dummy alias you entered previously next to ip `127.0.01` and append accordingly adding your next projects
```
# localhost name resolution is handled within DNS itself.
# 127.0.0.1       localhost
# ::1             localhost

# lets resolve ip to localhost first
 127.0.0.1       localhost
 # And then the ip's to our costom domain
  127.0.0.1       project1.local
  127.0.0.1       project2.local



```


Now the previous project url wont work and type the new url you config to 
At me i have two urls       `project1.local` & `project2.local` Working 

