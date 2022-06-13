SPHINXOPTS    ?= -c config/
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = src
BUILDDIR      = build

LIVE_SERVER_HOST = 0.0.0.0
LIVE_SERVER_PORT = 9500

.PHONY: help Makefile

help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

serve:
	@sphinx-autobuild "$(SOURCEDIR)" "$(BUILDDIR)" \
		--host $(LIVE_SERVER_HOST) \
		--port $(LIVE_SERVER_PORT) \
		$(SPHINXOPTS) $(O)
