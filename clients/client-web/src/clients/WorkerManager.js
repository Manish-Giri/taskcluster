// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class WorkerManager extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'worker-manager',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.ping.entry = {"args":[],"method":"get","name":"ping","query":[],"route":"/ping","stability":"stable","type":"function"}; // eslint-disable-line
    this.createWorkerPool.entry = {"args":["workerPoolId"],"input":true,"method":"put","name":"createWorkerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","scopes":{"AllOf":["worker-manager:create-worker-type:<workerPoolId>","worker-manager:provider:<providerId>"]},"stability":"experimental","type":"function"}; // eslint-disable-line
    this.updateWorkerPool.entry = {"args":["workerPoolId"],"input":true,"method":"post","name":"updateWorkerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","scopes":{"AllOf":["worker-manager:update-worker-type:<workerPoolId>","worker-manager:provider:<providerId>"]},"stability":"experimental","type":"function"}; // eslint-disable-line
    this.workerPool.entry = {"args":["workerPoolId"],"method":"get","name":"workerPool","output":true,"query":[],"route":"/worker-pool/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkerPools.entry = {"args":[],"method":"get","name":"listWorkerPools","output":true,"query":["continuationToken","limit"],"route":"/worker-pools","stability":"experimental","type":"function"}; // eslint-disable-line
    this.listWorkerPoolErrors.entry = {"args":["workerPoolId"],"method":"get","name":"listWorkerPoolErrors","output":true,"query":["continuationToken","limit"],"route":"/worker-pool-errors/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
    this.credentialsGoogle.entry = {"args":["workerPoolId"],"input":true,"method":"post","name":"credentialsGoogle","output":true,"query":[],"route":"/credentials/google/<workerPoolId>","stability":"experimental","type":"function"}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
  /* eslint-disable max-len */
  // Create a new worker pool. If the worker pool already exists, this will throw an error.
  /* eslint-enable max-len */
  createWorkerPool(...args) {
    this.validate(this.createWorkerPool.entry, args);

    return this.request(this.createWorkerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Given an existing worker pool definition, this will modify it and return
  // the new definition.
  // To delete a worker pool, set its `providerId` to `"null-provider"`.
  // After any existing workers have exited, a cleanup job will remove the
  // worker pool.  During that time, the worker pool can be updated again, such
  // as to set its `providerId` to a real provider.
  /* eslint-enable max-len */
  updateWorkerPool(...args) {
    this.validate(this.updateWorkerPool.entry, args);

    return this.request(this.updateWorkerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Fetch an existing worker pool defition.
  /* eslint-enable max-len */
  workerPool(...args) {
    this.validate(this.workerPool.entry, args);

    return this.request(this.workerPool.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of all the existing worker pools.
  /* eslint-enable max-len */
  listWorkerPools(...args) {
    this.validate(this.listWorkerPools.entry, args);

    return this.request(this.listWorkerPools.entry, args);
  }
  /* eslint-disable max-len */
  // Get the list of worker pool errors.
  /* eslint-enable max-len */
  listWorkerPoolErrors(...args) {
    this.validate(this.listWorkerPoolErrors.entry, args);

    return this.request(this.listWorkerPoolErrors.entry, args);
  }
  /* eslint-disable max-len */
  // Get Taskcluster credentials for a worker given an Instance Identity Token
  /* eslint-enable max-len */
  credentialsGoogle(...args) {
    this.validate(this.credentialsGoogle.entry, args);

    return this.request(this.credentialsGoogle.entry, args);
  }
}
