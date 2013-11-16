var config = {
	
	local: {
		mode: 'local',
		port: 3000,
		
		db: {
			dbType: 'MySQL',
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'mvc'
		},
		
	},
	
	staging: {
		mode: 'staging',
		port: 4000,
		
		db: {
			dbType: 'MySQL',
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'mvc'
		},
		
	},
	
	production: {
		mode: 'production',
		port: 5000,
		
		db: {
			dbType: 'MySQL',
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'mvc'
		},
	}
}

module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}