package core

type CloudflareAiError struct {
	IsCloudflareAiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareAiError(code string, msg string, ctx *Context) *CloudflareAiError {
	return &CloudflareAiError{
		IsCloudflareAiError: true,
		Sdk:              "CloudflareAi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareAiError) Error() string {
	return e.Msg
}
