var response = JSON.parse(prev.getResponseDataAsString())

if ('userId' in response == false) {
  AssertionResult.setResultForFailure('ユーザIDがレスポンスに含まれていない')
}

vars.put('userId', response.userId)
