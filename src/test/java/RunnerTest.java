import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format={"html:target/cucumber/",
        "json:target/cucumber.json",},features = "src/test/resources",tags = "@purchase,@search")
public class RunnerTest {
}
