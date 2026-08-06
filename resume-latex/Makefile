VARIANTS = cv-academic-en cv-industry-en cv-academic-es cv-industry-es
OUTDIR = ../public/cv

.PHONY: all clean

all: $(VARIANTS)

$(VARIANTS):
	latexmk -pdf -interaction=nonstopmode -halt-on-error -output-directory=.build $@.tex
	mkdir -p $(OUTDIR)
	cp .build/$@.pdf $(OUTDIR)/$@.pdf

clean:
	latexmk -C -output-directory=.build
	rm -rf .build
