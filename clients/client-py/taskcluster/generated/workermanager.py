# coding=utf-8
#####################################################
# THIS FILE IS AUTOMATICALLY GENERATED. DO NOT EDIT #
#####################################################
# noqa: E128,E201
from ..client import BaseClient
from ..client import createApiClient
from ..client import config
from ..client import createTemporaryCredentials
from ..client import createSession
_defaultConfig = config


class WorkerManager(BaseClient):
    """
    This service manages workers, including provisioning for dynamic worker pools.
    """

    classOptions = {
    }
    serviceName = 'worker-manager'
    apiVersion = 'v1'

    def ping(self, *args, **kwargs):
        """
        Ping Server

        Respond without doing anything.
        This endpoint is used to check that the service is up.

        This method is ``stable``
        """

        return self._makeApiCall(self.funcinfo["ping"], *args, **kwargs)

    def createWorkerPool(self, *args, **kwargs):
        """
        Create Worker Pool

        Create a new worker pool. If the worker pool already exists, this will throw an error.

        This method is ``experimental``
        """

        return self._makeApiCall(self.funcinfo["createWorkerPool"], *args, **kwargs)

    def updateWorkerPool(self, *args, **kwargs):
        """
        Update Worker Pool

        Given an existing worker pool definition, this will modify it and return
        the new definition.

        To delete a worker pool, set its `providerId` to `"null-provider"`.
        After any existing workers have exited, a cleanup job will remove the
        worker pool.  During that time, the worker pool can be updated again, such
        as to set its `providerId` to a real provider.

        This method is ``experimental``
        """

        return self._makeApiCall(self.funcinfo["updateWorkerPool"], *args, **kwargs)

    def workerPool(self, *args, **kwargs):
        """
        Get Worker Pool

        Fetch an existing worker pool defition.

        This method is ``experimental``
        """

        return self._makeApiCall(self.funcinfo["workerPool"], *args, **kwargs)

    def listWorkerPools(self, *args, **kwargs):
        """
        List All Worker Pools

        Get the list of all the existing worker pools.

        This method is ``experimental``
        """

        return self._makeApiCall(self.funcinfo["listWorkerPools"], *args, **kwargs)

    def credentialsGoogle(self, *args, **kwargs):
        """
        Google Credentials

        Get Taskcluster credentials for a worker given an Instance Identity Token

        This method is ``experimental``
        """

        return self._makeApiCall(self.funcinfo["credentialsGoogle"], *args, **kwargs)

    funcinfo = {
        "createWorkerPool": {
            'args': ['workerPoolId'],
            'input': 'v1/create-worker-pool-request.json#',
            'method': 'put',
            'name': 'createWorkerPool',
            'output': 'v1/worker-pool-full.json#',
            'route': '/worker-pool/<workerPoolId>',
            'stability': 'experimental',
        },
        "credentialsGoogle": {
            'args': ['workerPoolId'],
            'input': 'v1/credentials-google-request.json#',
            'method': 'post',
            'name': 'credentialsGoogle',
            'output': 'v1/temp-creds-response.json#',
            'route': '/credentials/google/<workerPoolId>',
            'stability': 'experimental',
        },
        "listWorkerPools": {
            'args': [],
            'method': 'get',
            'name': 'listWorkerPools',
            'output': 'v1/worker-pool-list.json#',
            'query': ['continuationToken', 'limit'],
            'route': '/worker-pools',
            'stability': 'experimental',
        },
        "ping": {
            'args': [],
            'method': 'get',
            'name': 'ping',
            'route': '/ping',
            'stability': 'stable',
        },
        "updateWorkerPool": {
            'args': ['workerPoolId'],
            'input': 'v1/create-worker-pool-request.json#',
            'method': 'post',
            'name': 'updateWorkerPool',
            'output': 'v1/worker-pool-full.json#',
            'route': '/worker-pool/<workerPoolId>',
            'stability': 'experimental',
        },
        "workerPool": {
            'args': ['workerPoolId'],
            'method': 'get',
            'name': 'workerPool',
            'output': 'v1/worker-pool-full.json#',
            'route': '/worker-pool/<workerPoolId>',
            'stability': 'experimental',
        },
    }


__all__ = ['createTemporaryCredentials', 'config', '_defaultConfig', 'createApiClient', 'createSession', 'WorkerManager']
