using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RWS.BackendExtension.ClonePublication.Controllers
{
    /// <summary>
    /// A base controller class to encapsulate functionality common to all API controllers.
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json", "text/json")]
    public abstract class ApiControllerBase : ControllerBase, IDisposable
    {
        /// <summary>
        /// Constructs <see cref="ApiControllerBase"/>.
        /// </summary>
        /// <param name="logger">Instance of <see cref="ILogger{ApiControllerBase}"/> used to log messages.</param>
        /// <param name="httpContextAccessor">Instance of <see cref="IHttpContextAccessor"/> used to get user from request.</param>
        protected ApiControllerBase(ILogger<ApiControllerBase> logger, IHttpContextAccessor httpContextAccessor)
        {
            Logger = logger;
            Thread.CurrentPrincipal = httpContextAccessor.HttpContext?.User;
        }

        /// <summary>
        /// Gets a <see cref="ILogger"/> instance used to log messages.
        /// </summary>
        /// <value>The <see cref="ILogger"/> instance used to log messages.</value>
        protected ILogger<ApiControllerBase> Logger { get; }

        /// <summary>
        /// Provides functionality to dispose managed resources.
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing) { }

        /// <inheritdoc cref="IDisposable"/>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
