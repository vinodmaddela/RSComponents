$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 2,
  "name": "User selects and purchases from RS Component website",
  "description": "",
  "id": "user-selects-and-purchases-from-rs-component-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@purchase"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "user should be able to purchase the item",
  "description": "",
  "id": "user-selects-and-purchases-from-rs-component-website;user-should-be-able-to-purchase-the-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on RS Components website landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on brands menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "selects siemens brand",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be directed to the siemens products page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the product and clicks buy",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on add to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on view basket",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "clicks on checkout button for purchase",
  "keyword": "And "
});
formatter.match({
  "location": "RSHomePageStep.user_is_on_RS_Components_website_landing_page()"
});
formatter.result({
  "duration": 8603710336,
  "status": "passed"
});
formatter.match({
  "location": "RSHomePageStep.user_clicks_on_brands_menu_tab()"
});
formatter.result({
  "duration": 470756170,
  "status": "passed"
});
formatter.match({
  "location": "RSHomePageStep.selects_siemens_brand()"
});
formatter.result({
  "duration": 4043112943,
  "status": "passed"
});
formatter.match({
  "location": "RSHomePageStep.user_should_be_directed_to_the_siemens_products_page()"
});
formatter.result({
  "duration": 141602279,
  "status": "passed"
});
formatter.match({
  "location": "RSHomePageStep.user_clicks_on_the_product_and_clicks_buy()"
});
formatter.result({
  "duration": 8027629483,
  "status": "passed"
});
formatter.match({
  "location": "RSHomePageStep.user_clicks_on_add_to_basket()"
});
formatter.result({
  "duration": 107164636,
  "error_message": "org.openqa.selenium.NoAlertPresentException: No modal dialog is currently open\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-4MEDFTK\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 54.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:processID: 5052, moz:profile: C:\\Users\\Vinod\\AppData\\Loca..., pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, specificationLevel: 0, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: f261cbcd-013b-4951-9027-e92dc6399147\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:986)\r\n\tat stepDefinations.RSHomePageStep.user_clicks_on_add_to_basket(RSHomePageStep.java:40)\r\n\tat ✽.Then user clicks on add to basket(purchase.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RSHomePageStep.user_clicks_on_view_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RSHomePageStep.clicks_on_checkout_button_for_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "user searches for items",
  "description": "",
  "id": "user-searches-for-items",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "user searches products with RS Stock No",
  "description": "",
  "id": "user-searches-for-items;user-searches-products-with-rs-stock-no",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on RS Components website landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters RS Stock No in the quick order text box",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on button Add to Basket",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user should see his item in the basket summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "RSHomePageStep.user_is_on_RS_Components_website_landing_page()"
});
formatter.result({
  "duration": 7157599628,
  "status": "passed"
});
formatter.match({
  "location": "QuickSearchStep.user_enters_RS_Stock_No_in_the_quick_order_text_box()"
});
formatter.result({
  "duration": 6418707020,
  "status": "passed"
});
formatter.match({
  "location": "QuickSearchStep.user_clicks_on_button_Add_to_Basket()"
});
formatter.result({
  "duration": 2361487654,
  "status": "passed"
});
formatter.match({
  "location": "QuickSearchStep.user_should_see_his_item_in_the_basket_summary_page()"
});
formatter.result({
  "duration": 111665400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "user search for products by applying filters",
  "description": "",
  "id": "user-searches-for-items;user-search-for-products-by-applying-filters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user is on RS Components website landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on All Products tab",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user selects connectors from the dropdown list",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Audio and Video connectors",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user clicks on HDMI connectors from categories",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user narrows search by applying filter based on brand",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user selects Molex brand and click apply filters button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user should see products by the applied filters",
  "keyword": "Then "
});
formatter.match({
  "location": "RSHomePageStep.user_is_on_RS_Components_website_landing_page()"
});
formatter.result({
  "duration": 6972696369,
  "status": "passed"
});
formatter.match({
  "location": "FilterSearchStep.user_clicks_on_All_Products_tab()"
});
formatter.result({
  "duration": 6508865411,
  "status": "passed"
});
formatter.match({
  "location": "FilterSearchStep.user_selects_connectors_from_the_dropdown_list()"
});
formatter.result({
  "duration": 1947071086,
  "status": "passed"
});
formatter.match({
  "location": "FilterSearchStep.user_clicks_on_Audio_and_Video_connectors()"
});
formatter.result({
  "duration": 1800386944,
  "status": "passed"
});
formatter.match({
  "location": "FilterSearchStep.user_clicks_on_HDMI_connectors_from_categories()"
});
formatter.result({
  "duration": 2641133891,
  "status": "passed"
});
formatter.match({
  "location": "FilterSearchStep.user_narrows_search_by_applying_filter_based_on_brand()"
});
formatter.result({
  "duration": 561589676,
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"a\"\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-4MEDFTK\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:47)\r\n\tat lib.WebDriverLib.selectByElementValue(WebDriverLib.java:69)\r\n\tat pages.FilterSearch.selectBrand(FilterSearch.java:49)\r\n\tat stepDefinations.FilterSearchStep.user_narrows_search_by_applying_filter_based_on_brand(FilterSearchStep.java:29)\r\n\tat ✽.Then user narrows search by applying filter based on brand(search.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FilterSearchStep.user_selects_Molex_brand_and_click_apply_filters_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FilterSearchStep.user_should_see_products_by_the_applied_filters()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "user enter incorrect data or part numbers",
  "description": "",
  "id": "user-searches-for-items;user-enter-incorrect-data-or-part-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user is on RS Components website landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enter part numbers in the search text box",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user is returned with relevant product",
  "keyword": "Then "
});
formatter.match({
  "location": "RSHomePageStep.user_is_on_RS_Components_website_landing_page()"
});
formatter.result({
  "duration": 7612195712,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSearchStep.user_enter_part_numbers_in_the_search_text_box()"
});
formatter.result({
  "duration": 6951285267,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSearchStep.user_is_returned_with_relevant_product()"
});
formatter.result({
  "duration": 30028767134,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for lib.WebDriverLib$1@42a9a63e (tried for 15 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat lib.WebDriverLib.waitForElementVisible(WebDriverLib.java:21)\r\n\tat pages.HomePageSearch.searchResult(HomePageSearch.java:27)\r\n\tat stepDefinations.HomePageSearchStep.user_is_returned_with_relevant_product(HomePageSearchStep.java:14)\r\n\tat ✽.Then user is returned with relevant product(search.feature:23)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: //span[@class\u003d\u0027zrSearchTerm\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-4MEDFTK\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 54.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:processID: 17720, moz:profile: C:\\Users\\Vinod\\AppData\\Loca..., pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, specificationLevel: 0, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: cbe2cff7-b626-4ef6-a225-328d4f242471\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027zrSearchTerm\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.isDisplayed(Unknown Source)\r\n\tat lib.WebDriverLib$1.apply(WebDriverLib.java:23)\r\n\tat lib.WebDriverLib$1.apply(WebDriverLib.java:21)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat lib.WebDriverLib.waitForElementVisible(WebDriverLib.java:21)\r\n\tat pages.HomePageSearch.searchResult(HomePageSearch.java:27)\r\n\tat stepDefinations.HomePageSearchStep.user_is_returned_with_relevant_product(HomePageSearchStep.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});