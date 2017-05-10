
var expect = chai.expect;

var medida = require('/js/medida');
var temperatura = require('/js/temperature');
var kelvin = require('/js/kelvin');
var celsius = require('/js/celsius');
var fahrenheit = require('/js/fahrenheit');



describe("Medida", function () {
  describe("Constructor", function() {
    it("Existe un Constructor", function() {
      var medida = new Medida(20, 'c');
      expect(medida.valor).to.equal(20);
      expect(medida.tipo).to.equal('c');
    });

    it("Acepta una cadena: '23k'", function(){
      var medida = new Medida('23K');
      expect(medida.valor).to.equal('23');
      expect(medida.tipo).to.equal('K');
   });
  });
  describe("Convertir", function () {
   it("Acepta", function () {
        var valor = Medida.convertir('273.15k to c');

        expect(parseFloat(valor.numero)).to.equal(273.15);
        expect(valor.tipo).to.equal('k');
        expect(valor.destino).to.equal('c');
      });
  });

});



describe("Clase Temperatura", function () {
  describe("constructor", function() {
    it("Constructor correcto", function() {
      var temperatura = new Temperatura (32, 'c');
      expect(temperatura.valor).to.equal(32);
    });


  });
});



describe("Celsius", function () {
  describe("constructor", function() {
    it("Constructor correcto", function() {
      var celsius = new Celsius(32);
     expect(celsius.valor).to.equal(32);

    });
    it("Conversión a Kelvin", function() {
      		var celsius = new Celsius(32);
      		expect(celsius.toKelvin().valor).to.equal(305.15);
    	});
  });
});


describe("Fahrenheit", function () {
  describe("constructor", function() {
    it("Constructor correcto", function() {
      var far = new Fahrenheit(32);
      expect(far.valor).to.equal(32);
    });
    it("Conversión a Celsius", function() {
      		var far = new Fahrenheit(32);
      		expect(far.toCelsius().valor).to.equal(0);
    	});
    it("Conversión a Kelvin", function() {
      		var far = new Fahrenheit(32);
      		expect(far.toKelvin().valor).to.equal(273.15);
    	});
  });
});



describe("Kelvin", function () {
  describe("constructor", function() {
    it("Constructor correcto", function() {
      var kelvin = new Kelvin(32);
      expect(kel.valor).to.equal(32);

    });
    it("Conversión a Celsius", function() {
      		var kelvin = new Kelvin(295);
      		expect(kel.toCelsius().valor).to.equal(21.850000000000023);
    });
    it("Conversión a Fahrenheit", function() {
      		var kelvin = new Kelvin(295);
      		expect(kel.toFahrenheit().valor).to.equal(71.33000000000004);
    });
  });
});
