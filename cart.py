from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Create a new Chrome browser instance
driver = webdriver.Chrome(executable_path="C:/Users/Sabina/AppData/Roaming/Python/Python311/site-packages/selenium/chromedriver.exe");

# Open the website
driver.get("http://127.0.0.1:5500/main.html#")

try:
    # Find all "Add to Cart" buttons
    add_to_cart_buttons = driver.find_elements(By.CLASS_NAME, "add-cart")

    # Click on the first "Add to Cart" button
    add_to_cart_buttons[0].click()

    # Wait for the cart to be visible
    wait = WebDriverWait(driver, 10)
    cart_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "cart")))

    # Click on the cart button to open the cart
    cart_button.click()

    # Wait for the cart items to be visible
    cart_items = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "cart-item")))

    # Check if the cart contains the correct number of items
    assert len(cart_items) == 1, "Cart doesn't contain the expected number of items"

    print("Test passed successfully!")

except Exception as e:
    print("Test failed:", e)

finally:
    # Close the browser
    driver.quit()
