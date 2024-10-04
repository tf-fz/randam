window.onload = viewChange;
let select = document.querySelector('[name="list"]');
let conmax = document.getElementById('conmax');
function buttonClick() {
	select = document.querySelector('[name="list"]');
	conmax = document.getElementById('conmax');
	document.getElementById(sm[0]).style.display = "none";
        if (document.getElementById('list')){
        id = document.getElementById('list').value;
        sm = [];
        if (select.value == 'オンゲキ'){
		game = 'オンゲキ';
		sm.push("f1");
        }else if (select.value == 'チュウニズム'){
		game = 'チュウニズム';
        	sm.push("ub1");
        }else if (select.value == 'maimai'){
		game = 'maimai';
		sm.push("ua1");
        }
		document.write(select);
	document.write(game);
	document.write(conmax);
	console.log(conmax);
}
let button = document.getElementById('btn');
button.onclick = buttonClick;

let select = document.querySelector('[name="list"]');
let conmax = document.getElementById('conmax');
let sm =["f0"];
let game ;
function viewChange(){
	document.getElementById(sm[0]).style.display = "none";
        if (document.getElementById('list')){
        id = document.getElementById('list').value;
        sm = [];
        if (select.value == 'オンゲキ'){
		game = 'オンゲキ';
		sm.push("f1");
        }else if (select.value == 'チュウニズム'){
		game = 'チュウニズム';
        	sm.push("ub1");
        }else if (select.value == 'maimai'){
		game = 'maimai';
		sm.push("ua1");
        }

//空の配列を作成	
let game = interaction.options.getString('機種');
		let difmin = interaction.options.getNumber('定数最小値');
		let difmax = interaction.options.getNumber('定数最大値');

let song = []
//別ファイルにある曲名リストをsongに入れる
song = song.concat(g.song)


		//機種の絞り込み
		let data0 = song.filter( p => p.dev == game)
		//定数下限の絞り込み
		let data1 = data0.filter( p => p.con >= difmin)
		//定数上限の絞り込み
		let data = data1.filter( q => q.con <= difmax).map(m => m.曲名)
		let subdata = data1.filter( q => q.con <= difmax).map(m => m.con)
		let maidata = data1.filter( q => q.con <= difmax).map(m => m.type)


		
		let rand = Math.floor( Math.random() * data.length);
		if (game == 'チュウニズム'){
			await interaction.reply(game+"のランダム選曲は準備中です");
		}else if (game == 'maimai'){
			if (difmin == difmax){
				await interaction.reply("機種：" +game +"\n" +"難易度指定：" +difmin.toFixed(1) +"　譜面定数：" +subdata[rand].toFixed(1) +"\n譜面タイプ：" +maidata[rand] +"\n曲名：" +data[rand]);
			}else if (difmin < difmax){
				await interaction.reply("機種：" +game +"\n" +"難易度指定："+difmin.toFixed(1)+"～"+difmax.toFixed(1)+"　譜面定数：" +subdata[rand].toFixed(1) +"\n譜面タイプ：" +maidata[rand] +"\n曲名：" +data[rand]);
			}else if (difmin > difmax){
				await interaction.reply("max"+difmax.toFixed(1)+" , min"+difmin.toFixed(1)+" , お前頭グミ");
		}
		}else if (difmin > difmax){
			await interaction.reply("max"+difmax.toFixed(1)+" , min"+difmin.toFixed(1)+" , お前頭グミ");
		}else if (difmin == difmax){
			await interaction.reply("機種：" +game +"\n" +"難易度指定：" +difmin.toFixed(1) +"　譜面定数：" +subdata[rand].toFixed(1) +"\n曲名：" +data[rand]);
		}else if (difmin < difmax){
			await interaction.reply("機種：" +game +"\n" +"難易度指定："+difmin.toFixed(1)+"～"+difmax.toFixed(1)+"　譜面定数：" +subdata[rand].toFixed(1) +"\n曲名：" +data[rand]);
		}
	},
};
