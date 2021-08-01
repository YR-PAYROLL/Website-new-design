$(document).ready(function () {
	// TODO: write your page related code here...
	$('#basis').val(10000)
	$('#tikralegemel').val($('#basis').val())
	$('#hishtalmutSelect').val(2)
	$('#tikralhishtalmut').val(tikraHishtalmutHok)
	$('#nzikoi').val(2.25)
	$('#ahuzoved').val(6.00)
	$('#ahuzhishtalmutoved').val(2.5)
	$('#ahuzhishtalmutmaavid').val(7.5)
	$('#ahuzgemelmaavid').val(6.5)
	$('#ahuzpizuim').val(8.33)
	$('#tikralegemel').prop("readonly", true);
	$('#tikralhishtalmut').prop("readonly", true);

});

var a = 6330
var b = 9080
var c = 14580
var d = 20260
var e = 42160
var f = 54300
var b_a = 6331
var b_b = 44020
var ma = 0.1
var mb = 0.14
var mc = 0.2
var md = 0.31
var me = 0.35
var mf = 0.47
var mg = 0.5
var mas = 0
var b_leumi = 0
var b_brioot = 0
var bl_a = 0.004
var bl_b = 0.07
var bb_a = 0.031
var bb_b = 0.05
var mbl_a = 0.0355
var mbl_b = 0.076
var b_leumi_maavid
var nekuda = 219
var brutolemas = 0
var gemel = 0
var gemelmaavid = 0
var pizuim = 0
var hishtalmut = 0
var hishtalmutmaavid = 0
var ahuzhishtalmut = 0
var ahuzhishtalmutmaavid = 0
var ahuzgemelmaavid = 0
var ahuzpizuim = 0
var nzikoi = 0
var basis = 0
var lolegemel = 0
var ahuzoved = 0
var zkifatRecev = 0
var zkifot = 0
var seif45 = 0
var tikralegemel = 0
var tikralhishtalmut = 0
var tikraseif45 = 215.6
var tikragemel = 1978.35
var tikrahishtalmut = 1178.4
var tikrapizoim = 2908
var tikragemelsachar = 0
var tikraGemelHok = 10551
var tikraHishtalmutHok = 15712

var a = 6290
var b = 9030
var c = 14490
var d = 20140
var e = 41910
var f = 53970
var b_a = 6331
var b_b = 44020
var mas = 0
var b_leumi = 0
var b_brioot = 0
var b_leumi_maavid
var nekuda = 218
var brutolemas = 0
var gemel = 0
var gemelmaavid = 0
var pizuim = 0
var hishtalmut = 0
var hishtalmutmaavid = 0
var ahuzhishtalmut = 0
var ahuzhishtalmutmaavid = 0
var ahuzgemelmaavid = 0
var ahuzpizuim = 0
var nzikoi = 0
var basis = 0
var lolegemel = 0
var ahuzoved = 0
var zkifatRecev = 0
var zkifot = 0
var seif45 = 0
var tikralegemel = 0
var tikralhishtalmut = 0
var tikraseif45 = 213.15
var tikragemel = 1926.225
var tikrahishtalmut = 1178.4
var tikrapizoim = 2908
var tikragemelsachar = 0


function calc() {
	basis = parseFloat($('#basis').val(), 0)
	if (isNaN(basis)) {
		basis = 0
	}
	lolegemel = parseFloat($('#lolegemel').val(), 0)
	if (isNaN(lolegemel)) {
		lolegemel = 0
	}
	zkifatRecev = parseFloat($('#zkifatRecev').val(), 0)
	if (isNaN(zkifatRecev)) {
		zkifatRecev = 0
	}
	zkifot = parseFloat($('#zkifot').val(), 0)
	if (isNaN(zkifot)) {
		zkifot = 0
	}

	ahuzoved = parseFloat($('#ahuzoved').val(), 0) / 100
	if (isNaN(ahuzoved)) {
		ahuzoved = 0
	}
	ahuzgemelmaavid = parseFloat($('#ahuzgemelmaavid').val(), 0) / 100
	if (isNaN(nzikoi)) {
		nzikoi = 0
	}
	ahuzpizuim = parseFloat($('#ahuzpizuim').val(), 0) / 100
	if (isNaN(ahuzpizuim)) {
		ahuzpizuim = 0
	}
	tikralegemel = parseFloat($('#tikralegemel').val(), 0)
	if (isNaN(tikralegemel)) {
		tikralegemel = 0
	}
	tikralhishtalmut = parseFloat($('#tikralhishtalmut').val(), 0)
	if (isNaN(tikralhishtalmut)) {
		tikralhishtalmut = 0
	}



	if (tikralegemel < basis) {
		gemel = tikralegemel * ahuzoved
		gemelmaavid = tikralegemel * ahuzgemelmaavid
		pizuim = tikralegemel * ahuzpizuim
	} else {
		gemel = basis * ahuzoved
		gemelmaavid = basis * ahuzgemelmaavid
		pizuim = basis * ahuzpizuim
	}
	seif45 = gemel * 0.35
	if (seif45 > tikraseif45) {
		seif45 = tikraseif45
	}

	ahuzhishtalmut = parseFloat($('#ahuzhishtalmutoved').val(), 0) / 100
	if (isNaN(ahuzhishtalmut)) {
		ahuzhishtalmut = 0
	}
	ahuzhishtalmutmaavid = parseFloat($('#ahuzhishtalmutmaavid').val(), 0) / 100
	if (isNaN(ahuzhishtalmutmaavid)) {
		ahuzhishtalmutmaavid = 0
	}
	if (tikralhishtalmut < basis) {
		hishtalmut = tikralhishtalmut * ahuzhishtalmut
		hishtalmutmaavid = tikralhishtalmut * ahuzhishtalmutmaavid
	} else {
		hishtalmut = basis * ahuzhishtalmut
		hishtalmutmaavid = basis * ahuzhishtalmutmaavid
	}
	nzikoi = parseFloat($('#nzikoi').val(), 0)
	if (isNaN(nzikoi)) {
		nzikoi = 0
	}
	brutolemas = basis + lolegemel + zkifot + zkifatRecev
	tikragemelsachar = Math.min((brutolemas - zkifatRecev) * 0.075, tikragemel)
	if (gemelmaavid > tikragemelsachar) {
		zkifot = zkifot + gemelmaavid - tikragemelsachar
		$('#zkifatGemel').text = (gemelmaavid - tikragemelsachar).toFixed(2)

	}


	if (hishtalmutmaavid > tikrahishtalmut) {
		zkifot = zkifot + hishtalmutmaavid - tikrahishtalmut
	}
	var tikraPizuimSachar = Math.min(basis * 0.0833, tikrapizoim)
	if (pizuim > tikraPizuimSachar) {
		zkifot = zkifot + pizuim - tikraPizuimSachar
		$('#zkifatPizuim').text = tikraPizuimSachar.toFixed(2)
	}
	brutolemas = basis + lolegemel + zkifot + zkifatRecev
	if (brutolemas < a) {
		mas = (brutolemas * ma) - (nzikoi * nekuda) - seif45
	} else if (brutolemas < b) {
		mas = ((brutolemas - a) * mb) + (a * ma) - (nzikoi * nekuda) - seif45
	} else if (brutolemas < c) {
		mas = ((brutolemas - b) * mc) + (a * ma) + (b - a) * mb - (nzikoi * nekuda) - seif45
		if (mas < 0) {
			mas = 0
		}
	} else if (brutolemas < d) {
		mas = ((brutolemas - c) * md) + (a * ma) + (b - a) * mb + (c - b) * mc - (nzikoi * nekuda) - seif45
		if (mas < 0) {
			mas = 0
		}
	} else if (brutolemas < e) {
		mas = ((brutolemas - d) * me) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md - (nzikoi * nekuda) - seif45
	} else if (brutolemas < f) {
		mas = ((brutolemas - e) * mf) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md + (e - d) * me - (nzikoi * nekuda) - seif45
	} else {
		mas = ((brutolemas - f) * mg) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md + (e - d) * me + (f - e) * mf - (nzikoi * nekuda) - seif45
	}

	if (brutolemas < b_a) {
		b_leumi = brutolemas * bl_a
		b_brioot = brutolemas * bb_a
		b_leumi_maavid = brutolemas * mbl_a
	} else if (brutolemas < b_b) {
		b_leumi = ((brutolemas - b_a) * bl_b) + (b_a * bl_a)
		b_brioot = ((brutolemas - b_a) * bb_b) + (b_a * bb_a)
		b_leumi_maavid = ((brutolemas - b_a) * mbl_b) + (b_a * mbl_a)
	} else {
		b_leumi = ((b_b - b_a) * bl_b) + (b_a * bl_a)
		b_brioot = ((b_b - b_a) * bb_b) + (b_a * bb_a)
		b_leumi_maavid = ((b_b - b_a) * mbl_b) + (b_a * mbl_a)
	}

	if (mas < 0) {
		mas = 0
	}
	mas = Math.round(mas)
	var neto = basis + lolegemel - mas - gemel - hishtalmut - b_leumi - b_brioot
	if (isNaN(neto)) {
		neto = 0
	}
	if (b_leumi < 0) {
		b_leumi = 0
	}

	if (b_brioot < 0) {
		b_brioot = 0
	}

	$('#neto').text(neto.toFixed(2))
	$('#mashacnasa').text(mas.toFixed(2))
	$('#bbrioot').text(b_brioot.toFixed(2))
	$('#bleumioved').text(b_leumi.toFixed(2))
	$('#gemeloved').text(gemel.toFixed(2))
	$('#hishtalmutoved').text(hishtalmut.toFixed(2))
	$('#hishtalmutoved').text(hishtalmut.toFixed(2))
	$('#tashlumim').text((basis + lolegemel).toFixed(2))
	$('#bleumimaavid').text(b_leumi_maavid.toFixed(2))
	$('#gemelmaavid').text(gemelmaavid.toFixed(2))
	$('#pizuim').text(pizuim.toFixed(2))
	$('#hishtalmutmaavid').text(hishtalmutmaavid.toFixed(2))
	$('#alut').text((basis + lolegemel + b_leumi_maavid + gemelmaavid + pizuim + hishtalmutmaavid).toFixed(2))
	$('#neto').show()
	$('#mashacnasa').show()
	$('#bbrioot').show()
	$('#bleumioved').show()
	$('#gemeloved').show()
	$('#hishtalmutoved').show()
	$('#mastext').show()
	$('#bleumitext').show()
	$('#brioottext').show()
	$('#gemeltext').show()
	$('#hishtalmuttext').show()
	$('#netotext').show()
	$('#tashlumimtext').show()
	$('#bleumimaavidtext').show()
	$('#gemelmaavidtext').show()
	$('#pizuimtext').show()
	$('#hishtalmutmaavidtext').show()
	$('#aluttext').show()
	$('#tashlumim').show()
	$('#bleumimaavid').show()
	$('#gemelmaavid').show()
	$('#pizuim').show()
	$('#hishtalmutmaavid').show()
	$('#alut').show()

	document.querySelector(".result-container").classList.add("open");

}
function GemelSelect() {
	var value = $('#gemelSelect').val()
	if (value == 1) {
		$('#tikralegemel').val($('#basis').val())
		$('#tikralegemel').prop("readonly", true);
	}
	if (value == 2) {
		$('#tikralegemel').val(tikraGemelHok)
		$('#tikralegemel').prop("readonly", true);
	}
	if (value == 3) {
		$('#tikralegemel').val(0)
		$('#tikralegemel').prop("readonly", false);
	}
}
function HishtalmutSelect() {

	var value = $('#hishtalmutSelect').val()
	if (value == 1) {
		$('#tikralhishtalmut').val($('#basis').val())
		$('#tikralhishtalmut').prop("readonly", true);
	}
	if (value == 2) {
		$('#tikralhishtalmut').val(tikraHishtalmutHok)
		$('#tikralhishtalmut').prop("readonly", true);
	}
	if (value == 3) {
		$('#tikralhishtalmut').val(0)
		$('#tikralhishtalmut').prop("readonly", false);
	}
}
function NewCalc() {
	location.reload();
}

// RESULTS VIEW
var close_btn = document.querySelector(".btn-close");

close_btn.addEventListener("click", () => {
	document.querySelector(".result-container").classList.remove("open");
})

document.onkeyup = function (e) {
	if (e.key === 'Escape') {
		document.querySelector(".result-container").classList.remove("open");
	}
	if (e.key == 'Enter' || e.keyCode === 13) {
		calc();
	}
}
