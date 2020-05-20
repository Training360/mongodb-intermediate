module.exports = {
    // Main database to monitor
    database: 'app',
    // MongoDB replica set members
    members: [
        'localhost:27018'
    ],
    // Database authentication
    auth: {},
    // SMTP configuration for sending alert e-mails (delete to disable)
    smtp: {},
    // Slack configuration for sending alert messages through webhook (delete to disable)
    slack: {},
    // Name of the preferred primary member (leave blank to disable checking)
    preferredPrimaryMember: '',
    // Number of seconds to wait in between health checks
    interval: 30,
    // Minimum number of members within your replica set
    minReplicaSetMembers: 3,
    // Maximum number of minutes for a member to be disconnected from another member
    maxHeartbeatThreshold: 3,
    // Maximum number of minutes for a secondary to lag behind while replicating from the primary's oplog
    maxReplicationDelay: 45,
    // Minimum number of minutes that each member's oplog must contain to survive a replica set data member failure
    minOplogLength: 60,
    // Maximum RAM memory (GB) each member's mongod process may occupy
    maxMongodMemory: 15,
    // Max database disk storage size (in MB) each member may utilize
    maxDatabaseSize: 12500
};