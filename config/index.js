var config = {
	
	local: {
		mode: 'local',
		port: 3000,
		
		db: {
			dbType: 'mysql',
			host: '127.0.0.1',
			user: 'root',
			//password: 'jasonm23',
			//port: '',
			database: 'one13_dev'
		},
		
	},
	
	staging: {
		mode: 'staging',
		port: 4000,
		
		db: {
			dbType: 'mysql',
			host: 'localhost',
			user: 'jasondev',
			password: 'jasonm23',
			port: '',
			database: 'node_mvc'
		},
		
	},
	
	production: {
		mode: 'production',
		port: 5000,
		
		db: {
			dbType: 'mysql',
			host: 'localhost',
			user: 'jasondev',
			password: 'jasonm23',
			port: '',
			database: 'node_mvc'
		},
	}
}

module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}