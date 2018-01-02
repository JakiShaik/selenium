var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var By = selenium.By;
const {Builder,Key,until} = require('selenium-webdriver');
const expect = require('chai').expect;

var browser;
test.before(function(){
    this.timeout(10000);
    browser = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
});

/*test.after(function() {
    browser.quit();
});*/

test.describe('Admin: login',function(){

    test.it('Login page',function(done){
        browser.get('http://localhost:3000/');
        browser.getTitle().then(function(title){
            expect(title).to.equal("WAVE");
        });
        done();
    });
    test.it('login as admin',function(done){
        //browser.sleep(1000);
        browser.findElement(selenium.By.id("username")).sendKeys("***********"+selenium.Key.ENTER);
        //browser.sleep(1000);
        //browser.findElement(selenium.By.id("password")).sendKeys("*******"+selenium.Key.ENTER);
        //browser.sleep(1000);
        //browser.findElement(selenium.By.name("submit")).click();
        done();
    })
    test.it('password session stored', function(done){
        var session = browser.manage().getCookies();
        expect(session).to.exist;
        done();
    })

});
test.describe('Admin: Home page', function() {
    test.it('navigation to view users', function(done){
        browser.findElement(selenium.By.partialLinkText('Users')).click();
        var myusers = browser.findElement(selenium.By.xpath('/html/body/div/div/div[1]/h2'));
        expect(myusers).to.exist;
        var tableheader = browser.findElement(selenium.By.xpath('/html/body/div/table/thead'));
        expect(tableheader).to.exist;
        var tablebody = browser.findElement(selenium.By.xpath('/html/body/div/table/tbody'));
        expect(tablebody).to.exist;
        browser.findElement(selenium.By.name('save')).click();
        browser.findElement(selenium.By.partialLinkText('Cancel')).click();
        browser.findElement(selenium.By.partialLinkText('WAVE')).click();
        done();
    })
    test.it('navigation to studies',function(done){
        browser.findElement(selenium.By.partialLinkText('Studies')).click();
        var mystudies = browser.findElement(selenium.By.xpath('/html/body/div/div/div[2]/h2'));
        expect(mystudies).to.exist;
        var table = browser.findElement(selenium.By.xpath('/html/body/div/table'));
        expect(table).to.exist;
        browser.findElement(selenium.By.name('add')).click();
        browser.findElement(selenium.By.name('cancel')).click();
        done();
    })
});
test.describe('Admin: Add User', function () {
    test.it('adding a new user',function(done) {
        browser.findElement(selenium.By.partialLinkText('WAVE')).click();
        browser.findElement(selenium.By.partialLinkText('Add')).click();
        browser.findElement(selenium.By.id('email')).sendKeys("integrationtest@gmail.com\tIm\tselenium\t1235460987\t01011970\t"+selenium.Key.ENTER);
        //Your login Username : integrationtest@gmail.com  Password : I81103263s
        //browser.sendKeys("Im\t");
        //browser.sendKeys("selenium\t");
        //browser.sendKeys("1235460987\t");
        //browser.sendKeys("01011970\t"+selenium.Key.ENTER);
        //browser.findElement()
        
        done();                    
    })
});
//test.describe()
/*test.describe('Users actions testing',function(){
    
        test.it('should access index page',function(done){
            browser.get('http://localhost:3000/');
            done();
        });
        test.it('login as admin',function(done){
            //browser.sleep(1000);
            browser.findElement(selenium.By.id("username")).sendKeys("jky@gmail.com \t");
            //browser.sleep(1000);
            browser.findElement(selenium.By.id("password")).sendKeys("rk1"+selenium.Key.ENTER);
            //browser.sleep(1000);
            //browser.findElement(selenium.By.name("submit")).click();
            done();
        })
        test.it('')
    })*/
