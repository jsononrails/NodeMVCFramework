var config = {
	pg: {
		mode: 'local',
		port: 3200,
		connString: 'tcp://squireshand:jasonm23@localhost/squireshand',
		facebookSettings: {
			app_id: '657144677672226',
			secret_key: '5185b1eb90c8cf1db5563feaf4aab2d6',
			callback_url: 'http://localhost:3200/login/facebook_callback'
		}
	},
	
	local: {
		mode: 'local',
		port: 3000,
		
		db: {
			dbType: 'MySQL',
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
			dbType: 'MySQL',
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
			dbType: 'MySQL',
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
