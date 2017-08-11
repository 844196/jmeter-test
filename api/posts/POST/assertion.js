var response = JSON.parse(prev.getResponseDataAsString())

if ('id' in response == false) {
  AssertionResult.setResultForFailure('記事IDが発番されていない')
}

vars.put('postId', response.id)
