from selenium import webdriver 
from selenium.webdriver.common.by import By
import time
driver = webdriver.Chrome()

 
def test_registro(): 
    home()
    btn_register = driver.find_element(By.XPATH,'//*[@id="navbarNavDropdown"]/ul/li/a')
    btn_register.click()

    name_field=driver.find_element(By.XPATH, '//*[@id="name"]')
    name_field.send_keys("Santiago")

    identificacion=driver.find_element(By.XPATH, '//*[@id="document"]')
    identificacion.send_keys("1055426272")

    email=driver.find_element(By.XPATH, '//*[@id="email"]')
    email.send_keys("santiago123@gmail.com")   

    btn_crear = driver.find_element(By.XPATH,'/html/body/app-root/app-user-add/div/div/form/button')
    btn_crear.click()         

    time.sleep(5)  

def test_editar():
    home()
    btn_editar = driver.find_element(By.XPATH,'/html/body/app-root/app-home/div/div/table/tbody/tr[3]/td[1]/div/button')
    btn_editar.click() 
    time.sleep(3)
    
    name_editar=driver.find_element(By.XPATH, '//*[@id="name"]')
    name_editar.send_keys("Perez")    

    time.sleep(3)
    btn_editado = driver.find_element(By.XPATH,'/html/body/app-root/app-user-edit/div/div/form/button')
    btn_editado.click()      

    time.sleep(3)  

def test_add_acti():
    btn_add_acti = driver.find_element(By.XPATH,'/html/body/app-root/app-user-edit/app-activity/div/div/div/div/button')
    btn_add_acti.click() 
    time.sleep(3)

    name_acti=driver.find_element(By.XPATH, '//*[@id="name"]')
    name_acti.send_keys("Entrega Correspondencia") 
    time.sleep(3)

    btn_guardar_acti = driver.find_element(By.XPATH,'/html/body/app-root/app-activity-add/div/div/form/button[1]')
    btn_guardar_acti.click() 
    time.sleep(3)

def test_injection_1():
    home()
    btn_register = driver.find_element(By.XPATH,'//*[@id="navbarNavDropdown"]/ul/li/a')
    btn_register.click()

    time.sleep(2) 

    name_field=driver.find_element(By.XPATH, '//*[@id="name"]')
    name_field.send_keys("Prueba Intrusión 1")

    identificacion=driver.find_element(By.XPATH, '//*[@id="document"]')
    identificacion.send_keys("123")

    email=driver.find_element(By.XPATH, '//*[@id="email"]')
    email.send_keys("'), ('Usuario insertado por inyección','123','inyeccion@correo.com")   

    btn_crear = driver.find_element(By.XPATH,'/html/body/app-root/app-user-add/div/div/form/button')
    btn_crear.click()         

    time.sleep(5) 

def test_injection_2():
    home()
    btn_register = driver.find_element(By.XPATH,'//*[@id="navbarNavDropdown"]/ul/li/a')
    btn_register.click()

    time.sleep(2) 

    name_field=driver.find_element(By.XPATH, '//*[@id="name"]')
    name_field.send_keys("Prueba Intrusión 2")

    identificacion=driver.find_element(By.XPATH, '//*[@id="document"]')
    identificacion.send_keys("1234")

    email=driver.find_element(By.XPATH, '//*[@id="email"]')
    email.send_keys("'-- ")   

    btn_crear = driver.find_element(By.XPATH,'/html/body/app-root/app-user-add/div/div/form/button')
    btn_crear.click()         

    time.sleep(5) 

def home():
    url = "http://localhost:8080/"
    driver.get(url)
    time.sleep(3) 